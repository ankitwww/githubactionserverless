var mongoose = require("mongoose");

var SkillSchema = mongoose.Schema({
  name: { type: String },
  rating: { type: Number },
  isMandatory: { type: Boolean },
});

module.exports = SkillSchema;
