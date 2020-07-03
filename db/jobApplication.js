// load the things we need
var mongoose = require("mongoose");

// define the schema for our user model
var userSchema = mongoose.Schema(
  {
    updatedDate: { type: Number },
    appliedDate: { type: Number },
    reqId: { type: String },
    status: { type: String },
    candidateId: { type: String },
    candidateEmail: { type: String },
    candidatePhone: { type: String },
    candidateName: { type: String },
    candidateExp: { type: Number },
    candidateLocation: { type: String },
    candidateProfileTitle: { type: String },
    candidateImageExt: { type: String },
    jobName: { type: String },
    pId: { type: String },
    jobLocCity: { type: String },
    jobExpMin: { type: Number },
    jobExpMax: { type: Number },
    comName: { type: String },
    comExt: { type: String },
    comId: { type: String },
    screeningStatus: { type: String },
    screeningMode: { type: String },
    candidateSkills: {
      type: [
        {
          exp: { type: Number },
          name: { type: String },
          rating: { type: Number },
          skillId: { type: String },
        },
      ],
    },
    candidateExps: {
      type: [
        {
          name: { type: String },
          desc: { type: String },
          loc: { type: String },
          designation: { type: String },
          doj: {
            month: { type: String },
            year: { type: String },
          },
          dor: {
            month: { type: String },
            year: { type: String },
          },
          orgEmail: { type: String },
          orgPhone: { type: String },
          isCurrent: { type: Boolean },
          noticePeriod: { type: Number },
          industry: { type: String },
          onInfo: { type: Boolean },
        },
      ],
    },
  },
  { collection: "jobApplication" }
);

module.exports = userSchema;
