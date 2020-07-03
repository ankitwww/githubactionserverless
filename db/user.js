// load the things we need
var mongoose = require("mongoose");

// define the schema for our user model
var userSchema = mongoose.Schema(
  {
    viewCount: { type: Number },
    cTime: { type: Number },
    email: { type: String },
    mobile: { type: String },
    countryCode: { type: String },
    fName: { type: String },
    lName: { type: String },
    fullName: { type: String },
    pwd: { type: String },
    title: { type: String },
    desc: { type: String },

    ext: {
      resume: { type: String },
      img: { type: String },
      imgBanner: { type: String },
      updatedResumeTime: { type: Number },
    },
    loc: {
      lat: { type: Number },
      lon: { type: Number },
      street: { type: String },
      city: { type: String },
      country: { type: String },
      zipcode: { type: String },
      adrs: { type: String },
    },
    dob: { type: Number },
    skills: {
      type: [
        {
          name: { type: String },
        },
      ],
    },
    edus: {
      type: [
        {
          course: { type: String },
        },
      ],
    },
    exps: {
      type: [
        {
          name: { type: String },
        },
      ],
    },
    certs: {
      type: [
        {
          certificateName: { type: String },
        },
      ],
    },
    socialMedia: {
      type: [
        {
          type: { type: String },
          link: { type: String },
        },
      ],
    },
    jobs: {
      posted: {
        type: mongoose.Schema.Types.Mixed,
      },
      applied: {
        type: mongoose.Schema.Types.Mixed,
      },
    },
    algoliaStatus: { type: Boolean, default: false },
    magicPasswordEnabled: { type: Boolean, default: true },
    totalExp: { type: Number },
    profilePer: { type: Number },
    otp: {
      verifyUser: {
        otp: { type: String },
        expireIn: { type: Number },
        otpAlive: { type: Boolean, default: true },
      },
    },
    jobs: {
      applied: { type: mongoose.Schema.Types.Mixed },
      posted: { type: mongoose.Schema.Types.Mixed },
    },
    isVerified: { type: Boolean },
    userPreference: { type: String },
    environment: { type: String },
    lastLoginProvider: { type: String },
    isAgreementVerification: { type: Boolean },
  },
  { collection: "user" }
);

module.exports = userSchema;
