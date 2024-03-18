const express = require('express');
const { MongoClient } = require('mongodb');
const router = express.Router();

// Route to get data for a specific DogID.
router.get('/dog/:dogId', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('Animal-Data');
        const collection = database.collection('Dogs');
        const dogId = req.params.dogId;
        const projection = { "Weight (kg)": 1, _id: 0 };

        const data = await collection.find(
            {
                DogID: dogId,
                "Weight (kg)": { $gte: 0, $lte: 1000000 },
                //date is in american time format
                "Date": { $in: ["31-12-2023", "30-12-2023"] }
               
            },
           { projection}
        ).toArray();

        if (data.length > 0) {
            res.json(data);
        } else {
            res.status(404).send('Dog not found for the specified date');
        }
    } catch (error) {
        console.error('Error accessing the database', error);
        res.status(500).send('Server error');
    } finally {
        await client.close();
    }
});

module.exports = router;


const client = new MongoClient("mongodb+srv://c1022557:Elanco@eland-project.88nwkvg.mongodb.net/'");


