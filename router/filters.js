const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const listingController = require("../controllers/filters.js");

router.route("/category/:category").get(wrapAsync(listingController.filters));

module.exports = router;
