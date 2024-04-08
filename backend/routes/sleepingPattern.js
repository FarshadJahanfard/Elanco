const express = require('express');
const { MongoClient } = require('mongodb');
const router = express.Router();


router.get('/dog/:dogId', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('Animal-Data');
        const collection = database.collection('Dogs');
        const dogId = req.params.dogId;
        const projection = {
            "_id": 0, 
            "Behaviour Pattern": 1, 
            "Heart Rate (bpm)": 1 ,
            "Activity Level (steps)": 1 ,
            "Breathing Rate (breaths/min)": 1 

        };
        

        const data = await collection.find(
            {
                $or: [
                    {
                        "Date": "30-12-2023",
                "Hour": { $gte: 12, $lte: 24},
                    },
                    {
                        "Date": "31-12-2023",
                "Hour": { $gte: 0, $lte: 12},
                    }
                ],
                DogID: dogId,
                "Behaviour Pattern": "Sleeping",
                "Heart Rate (bpm)": { $gte: 0, $lte: 1000},
                "Activity Level (steps)": { $gte: 0, $lte: 9999 },
                "Breathing Rate (breaths/min)": { $gte: 0, $lte: 1000},

                
                
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



