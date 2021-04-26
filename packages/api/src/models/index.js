const UserModel = require("./user-model");
const TrackModel = require("./track-model");
const PlaylistModel = require("./playlist-model");
const GenreModel = require("./genre-model");
const PlaybackModel = require("./playback-model");

module.exports = {
  User: UserModel,
  Track: TrackModel,
  Playlist: PlaylistModel,
  Genre: GenreModel,
  Playback: PlaybackModel,
};
