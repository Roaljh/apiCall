const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

// Set up Handlebars as the view engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Route to fetch data from the API and render the view
app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/');
        const products = response.data;
        res.render('index', { products });
    } catch (error) {
        res.status(500).send('Error fetching data from API');
    }
});

// Route to fetch data for a specific product by ID and render the view
app.get('/product/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        const product = response.data;
        res.render('product', { product });
    } catch (error) {
        res.status(500).send('Error fetching data from API');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
