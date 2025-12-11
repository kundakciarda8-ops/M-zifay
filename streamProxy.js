const fs = require('fs');
const path = require('path');
async function streamFile(storagePath, req, res) {
  const full = path.resolve(storagePath);
  if(!fs.existsSync(full)) return res.status(404).end();
  const stat = fs.statSync(full);
  const fileSize = stat.size;
  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunksize = (end - start) + 1;
    const file = fs.createReadStream(full, { start, end });
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'audio/flac'
    };
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = { 'Content-Length': fileSize, 'Content-Type': 'audio/flac' };
    res.writeHead(200, head);
    fs.createReadStream(full).pipe(res);
  }
}
module.exports = { streamFile };
