const express = require("express");
const { MongoClient } = require("mongodb");
const router = express.Router();


const uri = "mongodb+srv://c1022557:Elanco@eland-project.88nwkvg.mongodb.net";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


router.get("/dog/:dogId", async (req, res) => {
  try {
   
    await client.connect();
    const database = client.db("Animal-Data");
    const collection = database.collection("PetDetails");
    const dogId = req.params.dogId;

    
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
    
    await client.close();
  }
});

//Update:
/*
router.post("/dog/:dogId", async (req, res) => {
  try {
    console.log(req.body.udAdress);
    const newData = await dataController.updateAddress(req.address);
    console.log(newData);
    res.json(newData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Not fetched" });
  }
});*/

module.exports = router;
