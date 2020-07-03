// load the things we need
var mongoose = require("mongoose");
var SKILL = require("./skill");

// define the schema for our user model
var jobSchema = mongoose.Schema(
  {
    desc: { type: String },
    title: { type: String },
    status: { type: String },
    cTime: { type: Number },
    uTime: { type: Number },
    skills: {
      type: [SKILL],
    },
    userId: { type: String },
    clTime: { type: Number },
    draft: { type: Boolean },
    JobType: { type: String },
    role: { type: String },
    function: { type: String },
    remote: { type: Boolean },
    externalJob: { type: Boolean },
    loc: {
      lat: { type: Number },
      lon: { type: Number },
      street: { type: String },
      city: { type: String },
      country: { type: String },
      zipcode: { type: String },
      adrs: { type: String },
    },
    salary: {
      min: { type: Number },
      max: { type: Number },
      currency: { type: String },
    },
    com: {
      name: { type: String },
      desc: { type: String },
      parentCompanyId: { type: String },
    },
    joiningProb: {
      joiningProbability: { type: Number },
      isMandatory: { type: Boolean },
    },
    exp: {
      min: { type: Number },
      max: { type: Number },
      isMandatory: { type: Boolean },
    },
    applicationCount: { type: Number },
    interviewCount: { type: Number },
    viewCount: { type: Number },
    likeCount: { type: Number },
    edus: {
      type: [
        {
          started: { type: Number },
          completed: { type: Number },
          level: { type: String },
          onInfo: false,
        },
      ],
    },
    applicationStatus: {
      type: [
        {
          status: { type: String },
          isEmail: { type: Boolean },
          count: { type: Number },
        },
      ],
    },
    walkinStartDate: { type: Number },
    walkinEndDate: { type: Number },
    walkinStartTime: { type: Number },
    walkinEndTime: { type: Number },
    walkinSalaryShare: { type: Boolean },
    isWalkin: { type: Boolean },
    isFeatured: { type: Boolean },
    totalScreeningSent: { type: Number },
    _class: { type: String },
  },
  { collection: "job" }
);

module.exports = jobSchema;
