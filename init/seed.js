const mongoose = require("mongoose");
const Listing = require("./models/listing"); // change path if needed

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/travelWebsite")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const categories = [
  "mountains",
  "trending",
  "rooms",
  "iconic cities",
  "castles",
  "amazing pools",
  "camping",
  "farms",
  "arctic",
  "domes",
];

const sampleListings = [];

categories.forEach((category, index) => {
  for (let i = 1; i <= 3; i++) {
    sampleListings.push({
      title: `${
        category.charAt(0).toUpperCase() + category.slice(1)
      } Stay ${i}`,
      description: `This is a great ${category} listing number ${i}.`,
      image: {
        filename: `${category}${i}.jpg`,
        url: `https://example.com/images/${category}${i}.jpg`,
      },
      price: Math.floor(Math.random() * 200) + 50,
      location: `Location ${i}`,
      country: `Country ${index + 1}`,
      category,
      geometry: {
        type: "Point",
        coordinates: [
          70 + Math.random() * 10, // longitude
          20 + Math.random() * 10, // latitude
        ],
      },
    });
  }
});

const seedDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(sampleListings);
  console.log("Database seeded with 30 listings!");
  mongoose.connection.close();
};

seedDB();
