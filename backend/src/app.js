const express = require('express');
const multer = require('multer');
const Post = require('./model/postmodel');
const uploadToImagekit = require('./config/uploadToImagekit');

const app = express();
app.use(express.json());

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'backend/uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({ storage: storage });

app.post('/create-posts', upload.single('imageUrl'), async(req, res) => {
    try {
        const imageUrl = await uploadToImagekit(req.file.path, req.file.originalname);
        
        const newPost = new Post({
            imageUrl: imageUrl,
            caption: req.body.caption
        });

        await newPost.save();
        
        res.json({ 
            message: "post created", 
            post: newPost
        });
    } catch(error) {
        console.log(error);
        res.status(500).json({ error: "something went wrong" });
    }
});

module.exports = app;