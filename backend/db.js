const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const mongoURI =
  "mongodb+srv://DeepaPandey:Deepa123@cluster0.e84eekb.mongodb.net/gofoodmern?retryWrites=true&w=majority";

// Define a Mongoose schema for your "food_items" collection
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    const fetchedData = await mongoose.connection.db
      .collection("food_items")
      .find({})
      .toArray();
    const foodCategory = await mongoose.connection.db
      .collection("foodCategory")
      .find({})
      .toArray();
    //console.log(fetchedData);
    global.food_items = fetchedData;
    global.foodCategory = foodCategory;
    // console.log(global.food_items)
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};
module.exports = mongoDB;
