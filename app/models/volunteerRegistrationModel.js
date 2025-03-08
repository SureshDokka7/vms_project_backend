const { compare } = require("bcryptjs");
const mongoose = require("mongoose");

const userRegistration = new mongoose.Schema({
  //Step -1 User Registration
  registrationNo: { type: String, required: true },
  dateofRegistration: { type: String, required: true },
  firstName: { type: String, required: true },
  surName: { type: String, required: true },
  volunteerIntials: { type: String, required: true },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true
  },
  fatherorHusbandName: { type: String, required: true },
  dateofBirth: { type: String, required: true },
  age: { type: Number, required: true },
  diet : {type: String, required: true},
  race : {type: String, required: true},
  weight : {type: Number, required: true},
  height : {type: Number, required: true},
  bmi : {type: Number, required: true},
  identificationMarks : {type: String},
  takePhoto : {type: String},  
  files: [
    {
      fileSNO : {type: Number, required: true},
      filename: { type: String, required: true },
      // filepath: { type: String, required: true },
      filetype: { type: String, required: true },
      filesize: { type: String, required: true },
      uploadedAt: { type : Date, default: Date.now },
    }
  ],
  addfingerprints: {type: String},

  //Step - 2 Educational Qualification
  Nationality: { type: String, required: true },
  occupation: { type: String, required: true },
  higestQualification: { type: String, required: true },
  readingproficiency: { type: String, required: true },
  writingproficiency: { type: String, required: true },
  speakingproficiency: { type: String, required: true },

  //Step - 3 Communication Details
  phoneNumber: { type: Number, required: true },
  alternatePhoneNumber: { type: Number },
  emailID: { type: String, required: true },
  addressforCommunication: { type: String, required: true },
  comfiles : [
    {
      comfileName : {type: String, required: true},
      comfileSize: { type: String, required: true },
      comUploadedBy: { type: String, required: true },
      comUploadedAt: {  type : Date, default: Date.now }
    }
  ],

  //Step - 4 Emergency Contact Details
  nameofEmergencyContact: { type: String, required: true },
  phoneNumberofEmergencyContact: { type: Number, required: true },
  emailIDofEmergencyContact: { type: String, required: true },
  relationshipwithEmergencyContact: { type: String, required: true },
  registeredBy: { type: String, required: true },
  emergencyadress: { type: String, required: true },

  registrationStatus: { 
    type: String,
    enum : ["Step-1", "Step-2", "Step-3","Completed"],
    default: "Step-1"
  },
  
}, { timestamps: true });

module.exports = mongoose.model("User", userRegistration);
