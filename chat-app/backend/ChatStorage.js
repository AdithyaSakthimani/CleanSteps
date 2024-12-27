import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { Auth } from "./server.js";

const uri = "mongodb+srv://MidnightGamer:Tester123@cluster0.wqmrn.mongodb.net/ChatSpace?retryWrites=true&w=majority&appName=Cluster0";

const app = express();
const PORT = process.env.PORT || 3006;

app.use(cors());
app.use(bodyParser.json());

const connectDb = async () => {
  try {
    await mongoose.connect(uri); // Removed deprecated options
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Could not connect to MongoDB Atlas", error);
    process.exit(1);
  }
};

app.post("/chat-room", async (req, res) => {
  const { username, message } = req.body;
  if (!username || !message) {
    return res.status(400).json({ error: "Username and message are required." });
  }

  const newAuth = new Auth({ username, message });

  try {
    const savedData = await newAuth.save();
    res.status(201).json({
      message: "Message added to the database successfully.",
      data: savedData,
    });
  } catch (error) {
    console.error("Error adding your message to the database:", error);
    res.status(500).json({ error: "Error adding data to the database." });
  }
});

app.get("/chat-room", async (req, res) => {
  try {
    const messages = await Auth.find();
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages from the database:", error);
    res.status(500).json({ error: "Error fetching messages from the database." });
  }
});

// Start the Server
app.listen(PORT, async () => {
  await connectDb();
  console.log(`Server is running on http://localhost:${PORT}`);
});
