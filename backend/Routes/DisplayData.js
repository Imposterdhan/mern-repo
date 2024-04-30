const express = require('express');
const router = express.Router();

// Define route handler for GET requests to /api/foodData
router.get('/foodData', (req, res) => {
    try {
        // Respond with the global food items and food category data
        res.json({ food_items: global.food_items, food_Category: global.food_Category });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server error");
    }
});

module.exports = router;
