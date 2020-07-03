var mongoose = require("mongoose");
mongoose.models = {};
mongoose.modelSchemas = {};
// schemas
var jobApplication = require("./jobApplication");
var centralCompany = require("./centralCompany");
var job = require("./job");
var centralUser = require("./centralUser");
var user = require("./user");

module.exports = {
  jobApplication: mongoose.model("jobApplication", jobApplication),
  centralCompany: mongoose.model("centralCompany", centralCompany),
  job: mongoose.model("job", job),
  centralUser: mongoose.model("centralUser", centralUser),
  user: mongoose.model("user", user),
};
