const mongoose = require('mongoose');
const TrackSchema = new mongoose.Schema({
  title: String,
  artist: String,
  duration: Number,
  storagePath: String,
  bitrate: Number,
  isRoyaltyFree: { type: Boolean, default: false },
  uploadsByArtistId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  plays: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Track', TrackSchema);
