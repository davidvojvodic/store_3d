// Importing express and dotenv module
import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

// Initializing dotenv configuration
dotenv.config();

// Creating an instance of router from express
const router = express.Router();

// Initialize a new Configuration object for OpenAI API with API key
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Create an instance of `OpenAIApi` with config variable
const openai = new OpenAIApi(config);

// GET route "/" to send a message
router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

// POST route to generate an image from the prompt
router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    // Create an image with `openai.createImage()` by passing prompt, size, n and response_format
    const response = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    // Extract the base64 string from response
    const image = response.data.data[0].b64_json;

    // Send the image back to the client
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// Exporting router to use in the main application
export default router;
