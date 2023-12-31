const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {verifyToken} = require('../utils');

const app = express();

const userRoutes = require('../routes/userRoutes');
const authRoutes = require('../routes/authRoutes');
const orderRoutes = require('../routes/orderRoutes');

dotenv.config();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/orders', verifyToken, orderRoutes);

module.exports = app;

