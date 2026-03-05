# 🌍 Delta Project - Travel Listing Platform (Airbnb-wanderlust)

A full-stack web application for sharing and exploring travel destination listings. Built using Node.js, Express.js, MongoDB, and EJS templating, this platform allows users to create listings, post reviews, and visualize locations on an interactive map.

---
Live Demo: https://airbnb-mdirfan.onrender.com
---

## 🚀 Features

- 📝 **Create Listings**: Users can add travel destinations with images, descriptions, categories, and prices.
- 🔍 **Browse Listings**: Explore listings with location and category filters.
- 🌐 **Map Integration**: Visualize the location of listings via Mapbox.
- 💬 **Reviews & Ratings**: Leave and view ratings with comments on each listing.
- 👤 **Authentication**: Secure user signup/login using Passport.js.
- ✏️ **Edit & Delete**: Listing and review actions protected by ownership checks.

---

## 🛠️ Tech Stack

- **Frontend**: EJS, Bootstrap, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB & Mongoose
- **Authentication**: Passport.js (Local Strategy)
- **Geocoding & Maps**: Mapbox API
- **Image Uploads**: Cloudinary

---

## 📸 Screenshots

> ![Map](https://github.com/user-attachments/assets/1804d99a-9675-46a6-978e-48fa2ef9a6dd)
> ![home page](https://github.com/user-attachments/assets/2c6dfd04-c7d8-47b2-8fdd-49aacdac1904)
> ![show page](https://github.com/user-attachments/assets/8427087d-6657-4127-9def-2a86bce6392b)
> ![reviews](https://github.com/user-attachments/assets/54b0d28d-5496-4de9-a64d-b40cb08b68f8)






---

## 🔧 Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/Mdirfan0786/delta-project.git
   cd delta-project
   
2. **Install dependencies**
   ```bash
   npm install
   
3. **Environment Variables**
   **Create a .env file in the root directory and add the following:**
   ```bash
   # .env
   MAP_TOKEN=your_mapbox_token
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_KEY=your_cloudinary_key
   CLOUDINARY_SECRET=your_cloudinary_secret
   DB_URL=mongodb://localhost:27017/delta-travel
   SESSION_SECRET=your_session_secret

4. **Run the application**
   ```bash
   npm start

5. **Open your browser and go to:**
   ```arduino
   http://localhost:3000

6. 📁Folder Structure Explained
   ```bash
   delta-project/
   │
   ├── models/              # Mongoose schemas (Listing, Review, User)
   │   ├── listing.js
   │   ├── review.js
   │   └── user.js
   │
   ├── routes/              # All Express route files
   │   ├── listings.js      # CRUD for listings
   │   ├── reviews.js       # CRUD for reviews
   │   └── users.js         # Authentication routes
   │
   ├── views/               # EJS templates (HTML pages)
   │   ├── listings/        # All pages related to listings
   │   ├── reviews/         # Review related templates
   │   ├── users/           # Login and signup pages
   │   └── layouts/         # Base templates like boilerplate.ejs
   │
   ├── public/              # Static files (CSS, JS, client-side assets)
   │   ├── css/
   │   ├── js/
   │   └── images/
   │
   ├── utils/               # Utility functions
   │   ├── cloudinary.js    # Image upload config
   │   └── geocoder.js      # Mapbox geocoding logic
   │
   ├── middlewares/         # Custom middleware functions (like isLoggedIn)
   │
   ├── .env                 # Environment variables (not pushed to GitHub)
   ├── .gitignore           # Files/folders to ignore in git
   ├── app.js               # Main app entry point (Express server setup)
   ├── package.json         # Project metadata and dependencies
   └── README.md            # Project overview and documentation


## ✨ Contributing

We welcome contributions from developers of all levels!  
If you find a bug or want to add a new feature, feel free to:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes.
4. Push to your fork (`git push origin feature-name`)
5. Create a Pull Request.

Please make sure your code follows the existing style and passes all checks.

## 📄 License

This project is licensed under the [MIT License](LICENSE).  
You are free to use, modify, and distribute this project with proper attribution.

## 🙌 Acknowledgments

Special thanks to:

- [Mapbox](https://www.mapbox.com/) – for the map and geolocation services.
- [Cloudinary](https://cloudinary.com/) – for image storage and delivery.
- [Bootstrap](https://getbootstrap.com/) – for frontend styling.






