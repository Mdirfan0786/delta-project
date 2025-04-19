const Listing = require("../models/listing.js");

module.exports.filters = async (req, res) => {
  const filters = await Listing.find({ category });
  if (!filters.length) {
    req.flash("error", "filters for this listing not found!");
    res.redirect("/listings");
  } else {
    req.flash("success", "Here is some listing for this filter!");
  }
  res.render("filters/filters.ejs", { filters });
};
