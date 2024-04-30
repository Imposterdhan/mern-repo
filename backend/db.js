const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://user1:user123@cluster0.mfm5csi.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
    try {
        const connection = await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");

        // Access the "food_items" collection
        const foodItemsCollection = await connection.connection.db.collection("food_items");
        const foodItems = await foodItemsCollection.find({}).toArray();

        // Extract unique categories from food items
        const uniqueCategories = [...new Set(foodItems.map(item => item.CategoryName))];

        // Set global variables
        global.food_items = foodItems;
        global.food_Category = uniqueCategories;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

module.exports = mongoDB;
