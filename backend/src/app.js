const express = require("express");
const multer = require("multer");
const cors = require("cors");
const uploadFile = require("./services/storage.serives");
const Post = require("./models/post.model");

const app = express();
app.use(cors());
const upload = multer({ storage: multer.memoryStorage() });

app.use(express.json());

app.post("/create-post", upload.single("image"), async (req, res) => {
  try {
    const response = await uploadFile(req.file.buffer);
    const post = await Post.create({
      image: response.url,
      caption: req.body.caption,
    });
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    res.status(500).json({ error: "Failed to create post" });
  }
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    if (posts.length === 0) {
      return res.status(404).json({ message: "No posts found" });
    }
    res.status(200).json({ posts });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

module.exports = app;
