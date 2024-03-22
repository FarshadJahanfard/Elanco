const express = require("express");
const { MongoClient } = require("mongodb");
const router = express.Router();

// MongoDB connection string
const uri = "mongodb+srv://c1022557:Elanco@eland-project.88nwkvg.mongodb.net";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Route to get data for a specific DogID.
router.get("/dog/:dogId", async (req, res) => {
  try {
    // Connect to MongoDB
    await client.connect();
    const database = client.db("Animal-Data");
    const collection = database.collection("UserDetails");
    const dogId = req.params.dogId;

    // Find the dog details based on the dogId
    const data = await collection.find({ DogID: dogId }).toArray();

    if (data.length > 0) {
      res.json(data);
    } else {
      res.status(404).send("Dog not found for the specified ID");
    }
  } catch (error) {
    console.error("Error accessing the database", error);
    res.status(500).send("Server error");
  } finally {
    // Close MongoDB connection
    await client.close();
  }
});

module.exports = router;
