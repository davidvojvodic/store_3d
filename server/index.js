// Import necessary libraries and modules
import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

// Import dalleRoutes module
import dalleRoutes from "./routes/dalle.routes.js";

// Use dotenv to import environment variables
dotenv.config();

// Create an instance of express
const app = express();

// Enable Cross-Origin Resource Sharing
app.use(cors());

// Enable support for json data and set the size limit to 50mb
app.use(express.json({ limit: "50mb" }));

// Use the dalleRoutes module for requests starting with "/api/v1/dalle"
app.use("/api/v1/dalle", dalleRoutes);

// Send a response for the default route "/"
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from DALL.E" });
});

// Start the server listening on port 8080 and log a message
app.listen(8080, () => console.log("Server has started on port 8080"));
