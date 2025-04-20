const Listing = require("../models/listing.js");

module.exports.filters = async (req, res) => {
  const category = req.params.category;
  const filters = await Listing.find({ category });

  if (!filters.length) {
    req.flash("error", "No listings found for this category!");
    res.redirect("/listings");
  }

  req.flash("success", "Here are some listings for this category!");
  res.render("filters/filters.ejs", { filters });
};
