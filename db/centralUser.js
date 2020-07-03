// load the things we need
var mongoose = require("mongoose");

// define the schema for our user model
var userSchema = mongoose.Schema(
  {
    userId: { type: String },
    companyId: { type: String },
    role: { type: String },
    email: { type: String },
    companyName: { type: String },
    companyLocation: { type: String },
    isVerified: { type: Boolean, default: true },
    createTime: { type: Number },
    updateTime: { type: Number },
    dateConfirm: { type: Number },
    isAgreementVerification: { type: Boolean, default: true },
    _class: { type: String },
  },
  { collection: "centralUser" }
);

module.exports = userSchema;
