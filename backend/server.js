const express = require("express");
const path = require("path");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const app = express();

const routes = require("./routes/routes.js");
const activityLevelroutes = require("./routes/activityLevelroutes.js");

const heartRate = require("./routes/heartRate.js");
const foodIntake = require("./routes/foodIntake.js");
const temperature = require("./routes/temperature.js");
const weight = require("./routes/weight.js");
const sleepingPattern = require("./routes/sleepingPattern.js");
const weeklyWeight = require("./routes/weeklyWeight.js");
const petProfile = require("./routes/petProfile.js");
const waterIntake = require("./routes/waterIntake.js");
const userProfile = require("./routes/userProfile.js");
const heartRateStatic = require("./routes/heartRateStatic.js");
const breathingRate = require("./routes/breathingRate.js");
const caloriesBurnt = require("./routes/caloriesBurnt.js");
const averageTemperature = require("./routes/averageTemperature.js");
const averageBreathingRate = require("./routes/averageBreathingRate.js");
const averageFoodIntake = require("./routes/averagefoodIntake.js");
const yearlyAverageWeight = require("./routes/yearlyAverageWeight.js");
const yearlyAverageTemperature = require("./routes/yearlyAverageTemperature.js");
const yearlyBreathingRate = require("./routes/yearlyBreathingRate.js");
const yearlyFoodIntake = require("./routes/yearlyFoodIntake.js");
const dailyActivityLevel = require("./routes/dailyActivityLevel.js");

app.get("/", (req, res) => res.redirect("/login.html"));

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.static ("./Public"));
const uri = "mongodb+srv://c1022557:Elanco@eland-project.88nwkvg.mongodb.net/"; // MongoDB connection URI
const client = new MongoClient(uri);

async function main() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // Define routes
    app.get("/data", async (req, res) => {
      // Fetch data from MongoDB
      const database = client.db("Animal-Data");
      const collection = database.collection("Dogs");
      const data = await collection.find().toArray();
      res.json(data);
    });

    app.use("/api/routes", routes);
    app.use("/api/activitylevel", activityLevelroutes);
    app.use("/api/heartRate", heartRate);
    app.use("/api/foodIntake", foodIntake);
    app.use("/api/temperature", temperature);
    app.use("/api/weight", weight);
    app.use("/api/sleepingPattern", sleepingPattern);
    app.use("/api/weeklyWeight", weeklyWeight);
    app.use("/api/petProfile", petProfile);
    app.use("/api/waterIntake", waterIntake);
    app.use("/api/userProfile", userProfile);
    app.use("/api/heartRateStatic", heartRateStatic);
    app.use("/api/breathingRate", breathingRate);
    app.use("/api/caloriesBurnt", caloriesBurnt);
    app.use("/api/averageTemperature", averageTemperature);
    app.use("/api/averageBreathingRate", averageBreathingRate);
    app.use("/api/averageFoodIntake", averageFoodIntake);
    app.use("/api/yearlyAverageWeight", yearlyAverageWeight);
    app.use("/api/yearlyAverageTemperature", yearlyAverageTemperature);
    app.use("/api/yearlyBreathingRate", yearlyBreathingRate);
    app.use("/api/yearlyFoodIntake", yearlyFoodIntake);
    app.use("/api/dailyActivityLevel", dailyActivityLevel);
    // Start the server
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

main();
