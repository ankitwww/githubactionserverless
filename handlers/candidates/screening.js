"use strict";
const qs = require("querystring");
const mongoose = require("mongoose");
require("dotenv").config();
let db = null;
let conn = null;
let JobApplication = null;

module.exports.notCompleted = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  var endDate = new Date();
  var endTime = endDate.getTime();
  var oneDay = 24 * 60 * 60 * 1000;
  var startTime = endTime - oneDay;

  try {
    if (conn == null) {
      conn = mongoose.createConnection(process.env.MONGOCONN, {
        //useMongoClient: true,
        bufferCommands: false, // Disable mongoose buffering
        bufferMaxEntries: 0, // and MongoDB driver buffering
        // reconnectTries: 30,
        // reconnectInterval: 500,
        // poolSize: 1,
        // socketTimeoutMS: 2000000,
        // keepAlive: true,
      });
      await conn;
      db = require("../../db");
      JobApplication = db.jobApplication;
    }
    console.log(
      `{appliedDate: { $gte: ${startTime}, $lt: ${endTime} },status: 'Yettoscreen',}`
    );
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
  } catch (jerr) {
    console.error("an error occurred", jerr);
    callback(jerr, { message: "something went wrong!" });
  }
};
