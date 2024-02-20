const express = require('express');
const path = require('path');
const { MongoClient } = require('mongodb');
require('dotenv').config()
const app = express();

const routes = require('./routes/routes.js');
const activityLevelroutes = require('./routes/activityLevelroutes.js');

const heartRate = require('./routes/heartRate.js');
const foodIntake = require('./routes/foodIntake.js');
const temperature = require('./routes/temperature.js');
const weight = require('./routes/weight.js');


app.use(express.static(path.join(__dirname, '..', 'public')));
const uri = 'mongodb+srv://c1022557:Elanco@eland-project.88nwkvg.mongodb.net/'; // MongoDB connection URI
const client = new MongoClient(uri);

async function main() {
    try {
        // Connect to MongoDB
        await client.connect();
        console.log('Connected to MongoDB');

        // Define routes
        app.get('/data', async (req, res) => {
            // Fetch data from MongoDB
            const database = client.db('Animal-Data');
            const collection = database.collection('Dogs');
            const data = await collection.find().toArray();
            res.json(data);
        });

        app.use('/api/routes', routes);
        app.use('/api/activitylevel', activityLevelroutes);
        app.use('/api/heartRate', heartRate);
        app.use('/api/foodIntake', foodIntake);
        app.use('/api/temperature', temperature);
        app.use('/api/weight', weight);
        // Start the server
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    }
}

main();
