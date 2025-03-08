const asyncHandler = require("express-async-handler");
const User = require("../models/volunteerRegistrationModel");

exports.userRegistrationStep1 = asyncHandler(async (req, res) => {
  try {
    const { 
      registrationNo, dateofRegistration, firstName, surName, volunteerIntials, gender, 
      fatherorHusbandName, dateofBirth, age, diet, race, weight, height, bmi, 
      identificationMarks, addfingerprints 
    } = req.body;

    let files = [];
    if (req.files && req.files["files"]) {
      files = req.files["files"].map((file, index) => ({
        fileSNO: index + 1,
        filename: file.filename,
        filetype: file.mimetype,
        filesize: file.size,
      }));
    }

    const takePhoto = req.files && req.files["takePhoto"] ? req.files["takePhoto"][0].filename : null;

    const newUser = new User({
      registrationNo, dateofRegistration, firstName, surName, volunteerIntials, gender,
      fatherorHusbandName, dateofBirth, age, diet, race, weight, height, bmi,
      identificationMarks, takePhoto, files, addfingerprints
    });

    await newUser.save();

    res.status(201).json({
      status: true,
      message: "Step 1 Completed",
      user: newUser,
    });

  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
});

exports.userRegistrationStep2 = asyncHandler(async (req, res) => {
  try {
    const userId = req.params.id;

    const {
      nationality,
      occupation,
      higestQualification,
      readingproficiency,
      writingproficiency,
      speakingproficiency,
    } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ status: false, message: "User not found" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        nationality,
        occupation,
        higestQualification,
        readingproficiency,
        writingproficiency,
        speakingproficiency,
        registrationStatus: "Step-2",
      },
      { new: true }
    );

    res.status(200).json({
      status: true,
      message: "Step 2 Completed",
      user: updatedUser,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
});

exports.userRegistrationStep3 = asyncHandler(async (req, res) => {
  try {
    const userId = req.params.id;

    const files = req.files.map((file, index) => ({
      fileSNO: index + 1,
      filename: file.originalname,
      filepath: `/uploads/${file.filename}`,
      filetype: file.mimetype,
      filesize: file.size
    }));

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        phoneNumber: req.body.phoneNumber,
        alternatePhoneNumber: req.body.alternatePhoneNumber,
        emailID: req.body.emailID,
        addressForCommunication: req.body.addressForCommunication,
        registrationStatus: "Step3",
        documents: files.length > 0 ? files : undefined 
      },
      { new: true }
    );

    res.status(200).json({
      status: true,
      message: "Step 3 Completed",
      user: updatedUser
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message
    });
  }
});

exports.userRegistrationStep4 = async (req, res) => {
  try {
    const userId = req.params.id;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        nameofEmergencyContact: req.body.nameofEmergencyContact,
        phoneNumberofEmergencyContact: req.body.phoneNumberofEmergencyContact,
        emailIDofEmergencyContact: req.body.emailIDofEmergencyContact,
        relationshipwithEmergencyContact: req.body.relationshipwithEmergencyContact,
        registeredBy: req.body.registeredBy,
        emergencyAddress: req.body.emergencyAddress,
        registrationStatus: "Completed"
      },
      { new: true }
    );

    res.status(200).json({ message: "User Registration Successfull", user: updatedUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

