Instagram-like Backend — Project Documentation
Date: April 23, 2026
What I Built
A backend API that allows users to create posts with an image and caption — similar to how Instagram works.

Tech Stack Used

Node.js — JavaScript runtime to run the backend
Express.js — Framework to create API routes
MongoDB Atlas — Cloud database to store post data
Mongoose — Library to connect and interact with MongoDB
Multer — Middleware to handle image file uploads
ImageKit — Cloud storage service to store images and get a URL back
dotenv — To store secret keys safely in a .env file


How It Works (Full Flow)
User sends image + caption
→ Multer receives and temporarily saves image to uploads/ folder
→ Image is sent to ImageKit
→ ImageKit stores it and returns a URL
→ URL + caption are saved to MongoDB
→ Server sends back the saved post as response

API Endpoint
POST /create-posts

Body: form-data

imageUrl → File (image)
caption → Text




Project Structure
Revision/
  backend/
    src/
      config/
        imagekit.js         → ImageKit connection setup
        uploadToImagekit.js → Handles image upload to ImageKit
      models/
        post.model.js       → MongoDB schema for posts
      app.js                → Express routes
    uploads/                → Temporary image storage
    server.js               → Entry point, starts the server
  .env                      → Secret keys (not pushed to GitHub)
  package.json

Key Concepts I Learned
Multer
Middleware that intercepts incoming file uploads before your route handles them. Without it, Express can't read image files from requests.

ImageKit
A cloud media storage service. Instead of storing images directly in MongoDB (bad practice), we upload to ImageKit and only store the returned URL in the database.

dotenv
Stores sensitive credentials like API keys in a .env file so they never get pushed to GitHub. Accessed via process.env.VARIABLE_NAME in code.

Mongoose Schema
Defines the structure of data stored in MongoDB. Like a blueprint — tells the database what fields to expect and what type they should be.

MongoDB Model
Created from the schema using mongoose.model('Post', postSchema). This is the actual tool used to save and retrieve data from the database.

What I Would Add Next

User authentication (JWT)
Get all posts route
Delete post route
Frontend integration
Cloudinary/ImageKit direct upload from frontend


How to Run
bash# Install dependencies
npm install

# Add your credentials to .env
IMAGEKIT_PUBLIC_KEY=your_key
IMAGEKIT_PRIVATE_KEY=your_key
IMAGEKIT_URL_ENDPOINT=your_endpoint
MONGO_URI=your_mongodb_uri

# Start server
node backend/server.js

Important
Make sure these are in your .gitignore before pushing to GitHub:
.env
backend/uploads/
node_modules/