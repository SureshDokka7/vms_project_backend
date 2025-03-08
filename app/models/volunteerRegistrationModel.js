const { compare } = require("bcryptjs");
const mongoose = require("mongoose");

const userRegistration = new mongoose.Schema({
  //Step -1 User Registration
  registrationNo: { type: String,default : "" },
  dateofRegistration: { type: String,default : "" },
  firstName: { type: String,default : "" },
  surName: { type: String,default : "" },
  volunteerIntials: { type: String,default : "" },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
   default : ""
  },
  fatherorHusbandName: { type: String,default : "" },
  dateofBirth: { type: String,default : "" },
  age: { type: Number,default : "" },
  diet : {type: String,default : ""},
  race : {type: String,default : ""},
  weight : {type: Number,default : ""},
  height : {type: Number,default : ""},
  bmi : {type: Number,default : ""},
  identificationMarks : {type: String},
  takePhoto : {type: String},  
  files: [
    {
      fileSNO : {type: Number,default : ""},
      filename: { type: String,default : "" },
      // filepath: { type: String,default : "" },
      filetype: { type: String,default : "" },
      filesize: { type: String,default : "" },
      uploadedAt: { type : Date, default: Date.now },
    }
  ],
  addfingerprints: {type: String},

  //Step - 2 Educational Qualification
  Nationality: { type: String,default : "" },
  occupation: { type: String,default : "" },
  higestQualification: { type: String,default : "" },
  readingproficiency: { type: String,default : "" },
  writingproficiency: { type: String,default : "" },
  speakingproficiency: { type: String,default : "" },

  //Step - 3 Communication Details
  phoneNumber: { type: Number,default : "" },
  alternatePhoneNumber: { type: Number },
  emailID: { type: String,default : "" },
  addressforCommunication: { type: String,default : "" },
  comfiles : [
    {
      comfileName : {type: String,default : ""},
      comfileSize: { type: String,default : "" },
      comUploadedBy: { type: String,default : "" },
      comUploadedAt: {  type : Date, default: Date.now }
    }
  ],

  //Step - 4 Emergency Contact Details
  nameofEmergencyContact: { type: String,default : "" },
  phoneNumberofEmergencyContact: { type: Number,default : "" },
  emailIDofEmergencyContact: { type: String,default : "" },
  relationshipwithEmergencyContact: { type: String,default : "" },
  registeredBy: { type: String,default : "" },
  emergencyaddress: { type: String,default : "" },

  registrationStatus: { 
    type: String,
    enum : ["Step-1", "Step-2", "Step-3","Completed"],
    default: "Step-1"
  },
  
}, { timestamps: true });

module.exports = mongoose.model("User", userRegistration);
