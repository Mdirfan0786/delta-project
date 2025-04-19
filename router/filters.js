const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const listingController = require("../controllers/filters.js");

router.route("/trending").get(wrapAsync(listingController.filters));
router.route("/mountains").get(wrapAsync(listingController.filters));
// router.route("/").get(wrapAsync(listingController.filters));
// router.route("/").get(wrapAsync(listingController.filters));

module.exports = router;
