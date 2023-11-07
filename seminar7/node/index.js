const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const orders = require('./utils/constants');
const app = express();
const path = require('path');

const logger = (req, res, next) => { 
    console.log(`${req.method} ${req.path} ${res.statusCode}`); 
    next(); 
};

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({origin: process.env.CLIENT_URL || 'http://127.0.0.1:5500'}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(logger);
dotenv.config();

const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/orders', function(req, res) {
    res.status(200).json(orders);
})

app.get('/orders/:id', function(req, res) {
    const id = parseInt(req.params.id);

    const foundOrder = orders.find(el => el.id === id);

    if(foundOrder) {
        res.status(200).json(foundOrder);
    } else {
        res.status(404).json({message: 'Order not found'});
    }
})

app.post('/orders', function(req, res) {
    const newOrder = req.body;

    if(req.body) {
        newOrder.id = orders.length + 1;
        orders.push(newOrder);
    
        res.status(201).json(newOrder);
    } else {
        res.status(404).json({message: 'Order not found'});
    }
})

app.put('/orders/:id', function(req, res) {
    const id = parseInt(req.params.id);

    const foundOrderIndex = orders.findIndex(el => el.id === id);

    if(foundOrderIndex !== -1) {
        orders[foundOrderIndex] = {...orders[foundOrderIndex], ...req.body};

        res.status(200).json(orders[foundOrderIndex]);
    } else {
        res.status(404).json({message: 'Order not found'});
    }
})

app.delete('/orders/:id', function(req, res) {
    const id = parseInt(req.params.id);

    const foundOrderIndex = orders.findIndex(el => el.id === id);

    if(foundOrderIndex !== -1) {
        orders.splice(foundOrderIndex, 1);

        res.status(200).json({message: `Order with id ${id} was deleted`});
        // res.status(204).end()
    } else {
        res.status(404).json({message: 'Order not found'});
    }

})

app.listen(PORT, function() {
    console.log(`Server listening on ${PORT}`);
})
