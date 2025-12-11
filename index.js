const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const tracksRouter = require('./routes/tracks');
const aiRouter = require('./routes/ai');
const authRouter = require('./routes/auth');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });
io.on('connection', (socket) => {
  console.log('Socket connected', socket.id);
  socket.on('disconnect', ()=> console.log('Socket disconnected', socket.id));
});
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/muzifay')
  .then(()=> console.log('Mongo connected')).catch(err=> console.error(err));
app.use('/tracks', tracksRouter);
app.use('/ai', aiRouter);
app.use('/auth', authRouter);
app.get('/', (req,res)=> res.json({ok:true, version:'1.0'}));
const PORT = process.env.PORT || 4000;
server.listen(PORT, ()=> console.log('API running on', PORT));
