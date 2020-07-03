var mongoose = require("mongoose");

var centralCompanySchema = mongoose.Schema(
  {
    createDate: { type: Number },
    updateDate: { type: Number },
    expiryDate: { type: Number },
    companyName: { type: String },
    description: { type: String },
    yearFounded: { type: String },
    companyLocation: { type: String },
    companyLogo: { type: String },
    industryType: { type: String },
    website: { type: String },
    companySize: { type: String },
    accessCode: { type: String },
    status: { type: String },
    isApproved: { type: Boolean },
    templateId: { type: String },
    bannerLink: { type: String },
    tagline: { type: String },
    companyPhone: { type: String },
    companyEmail: { type: String },
    bannerTagline: { type: String },
    publish: { type: String },
    bannerLinkDisplay: { type: String },
    _class: { type: String },
    staffingStatus: { type: Boolean },
    faq: {
      faqs: {
        type: [
          {
            question: { type: String },
            answer: { type: String },
          },
        ],
      },
      additionalInformation: { type: String },
    },
    companyVideo: {
      type: [
        {
          fileName: { type: String },
          extn: { type: String },
        },
      ],
    },
    testimonial: {
      type: [
        {
          imageLink: { type: String },
          name: { type: String },
          description: { type: String },
          testimonial: { type: String },
          videoLink: { type: String },
        },
      ],
    },
    companySocial: {
      type: [
        {
          type: { type: String },
          link: { type: String },
        },
      ],
    },
    companyPictures: {
      type: [
        {
          fileName: { type: String },
          extn: { type: String },
        },
      ],
    },
    companyBenefits: {
      type: [
        {
          name: { type: String },
          type: { type: String, default: "true" },
        },
      ],
    },
    admins: { type: [{ email: { type: String } }] },
  },
  { collection: "centralCompany" }
);

module.exports = centralCompanySchema;
