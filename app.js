const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Define the POST route
app.post('/process-data', (req, res) => {
    const data = req.body.data; // Get the data array from the request body
    let odd_numbers = [];
    let even_numbers = [];
    let alphabets = [];

    // Process each item in the data array
    data.forEach(item => {
        if (!isNaN(item)) { // Check if the item is a number
            if (parseInt(item) % 2 === 0) {
                even_numbers.push(item);
            } else {
                odd_numbers.push(item);
            }
        } else if (item.match(/[a-zA-Z]/)) { // Check if the item is an alphabet
            alphabets.push(item.toUpperCase());
        }
    });

    // Create the response object
    const response = {
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        odd_numbers: odd_numbers,
        even_numbers: even_numbers,
        alphabets: alphabets
    };

    // Send the response
    res.json(response);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
