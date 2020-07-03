"use strict";
const qs = require("querystring");
const mongoose = require("mongoose");
require("dotenv").config();
var db = require("../../db");
var JobApplication = db.jobApplication;

mongoose.connect(process.env.MONGOCONN, {
  useMongoClient: true,
  bufferCommands: false, // Disable mongoose buffering
  bufferMaxEntries: 0, // and MongoDB driver buffering
});

mongoose.connection.on("connected", function (ref) {
  console.log("Connected to mongo server.");
});

mongoose.connection.on("error", function (err) {
  console.log("Could not connect to mongo server!", err);
});

module.exports.notCompleted = (event, context, callback) => {
  var startDate = new Date();
  var startTime = startDate.getTime();
  var oneDay = 24 * 60 * 60 * 1000;
  var endTime = startTime + oneDay;
  try {
    MongoClient.connect(process.env.MONGOCONN, function (err, client) {
      if (!err && client) {
        JobApplication.find(
          {
            appliedDate: { $gte: startTime, $lt: endTime },
            status: "Yettoscreen",
          },
          { candidateEmail: 1 }
        ).exec(function (jErr, apps) {
          if (!jErr) {
            console.log("Found ", apps.length);
            callback(null, { apps });
          } else {
            console.log(jErr);
            callback(jErr, { message: "something went wrong!" });
          }
        });
      } else {
        console.log(err);
        callback(err, { message: "something went wrong!" });
      }
    });
  } catch (jerr) {
    console.error("an error occurred", err);
    callback(jErr, { message: "something went wrong!" });
  }
};
