const express = require("express");
const registrationController = require("../controllers/volunteerRegistrationController");
const upload = require('../middlewares/volunteerRegistrationMiddleware');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User Registration
 *   description: APIs for volunteer registration
 */

/**
 * @swagger
 * /api/registration/userRegistrationStep1:
 *   post:
 *     summary: Step 1 - Register User
 *     tags: [User Registration]
 *     description: Registers a new volunteer with basic details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               registrationNo:
 *                 type: string
 *               dateofRegistration:
 *                 type: string
 *               firstName:
 *                 type: string
 *               surName:
 *                 type: string
 *               volunteerIntials:
 *                 type: string
 *               gender:
 *                 type: string
 *                 enum: [Male, Female, Other]
 *               fatherorHusbandName:
 *                 type: string
 *               dateofBirth:
 *                 type: string
 *               age:
 *                 type: number
 *               diet:
 *                 type: string
 *               race:
 *                 type: string
 *               weight:
 *                 type: number
 *               height:
 *                 type: number
 *               bmi:
 *                 type: number
 *               identificationMarks:
 *                 type: string
 *               takePhoto:
 *                 type: string
 *               addfingerprints:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad request
 */
router.post("/userRegistrationStep1", upload, registrationController.userRegistrationStep1);

/**
 * @swagger
 * /api/registration/userRegistrationStep2/{id}:
 *   put:
 *     summary: Step 2 - Add Educational Qualification
 *     tags: [User Registration]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Nationality:
 *                 type: string
 *               occupation:
 *                 type: string
 *               higestQualification:
 *                 type: string
 *               readingproficiency:
 *                 type: string
 *               writingproficiency:
 *                 type: string
 *               speakingproficiency:
 *                 type: string
 *     responses:
 *       200:
 *         description: Step 2 completed successfully
 *       404:
 *         description: User not found
 */
router.put("/userRegistrationStep2/:id", registrationController.userRegistrationStep2);

/**
 * @swagger
 * /api/registration/userRegistrationStep3/{id}:
 *   put:
 *     summary: Step 3 - Add Communication Details
 *     tags: [User Registration]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phoneNumber:
 *                 type: number
 *               alternatePhoneNumber:
 *                 type: number
 *               emailID:
 *                 type: string
 *               addressforCommunication:
 *                 type: string
 *     responses:
 *       200:
 *         description: Step 3 completed successfully
 *       404:
 *         description: User not found
 */
router.put("/userRegistrationStep3/:id", upload, registrationController.userRegistrationStep3);

/**
 * @swagger
 * /api/registration/userRegistrationStep4/{id}:
 *   put:
 *     summary: Step 4 - Add Emergency Contact Details
 *     tags: [User Registration]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nameofEmergencyContact:
 *                 type: string
 *               phoneNumberofEmergencyContact:
 *                 type: number
 *               emailIDofEmergencyContact:
 *                 type: string
 *               relationshipwithEmergencyContact:
 *                 type: string
 *               registeredBy:
 *                 type: string
 *               emergencyadress:
 *                 type: string
 *     responses:
 *       200:
 *         description: Step 4 completed successfully
 *       404:
 *         description: User not found
 */
router.put("/userRegistrationStep4/:id", registrationController.userRegistrationStep4);

router.get("/getallregisteredUsers", registrationController.getallregisteredUsers);

router.get("/getregisteredUser/:id", registrationController.getregisteredUser);

router.delete("/registrationDelete/:id", registrationController.deleteregisteredUser);

module.exports = router;
