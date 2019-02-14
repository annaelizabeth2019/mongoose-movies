//connect to mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//define the mongoose schema

var movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    default: function () {
      return new Date().getFullYear();
    }
  }, mpaaRating: String,
  cast: [String],
  nowShowing: { type: Boolean, default: false }
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);


