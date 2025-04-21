const express = require("express");
const router = express.Router();
const listingController = require("../controllers/privacyTerms.js");

router.get("/privacy", listingController.privacy);
router.get("/terms", listingController.terms);

module.exports = router;
