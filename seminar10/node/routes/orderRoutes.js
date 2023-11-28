const express = require('express');
const { handleErrorResponse } = require('../utils');

const User = require('../database/models/User');
const Order = require('../database/models/Oder');

const router = express.Router();

router.get('/', async function(req, res) {
    try {
        const orders = await Order.findAll();

        res.status(200).json({success: true, message: 'Orders found', data: orders});
    } catch (error) {
        handleErrorResponse(res, error, 'Error retrieving orders');
    }
})

router.get('/', async function(req, res) {
    try {
        const userId = req.userId;

        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({success: false, message: "User not found", data: {}});
        }

        const orders = await Order.findAll({
            where: {
                userId
            }
        })

        return res.status(200).json({success: true, message: "Orders", data: orders})

    } catch (error) {
        handleErrorResponse(res, error, 'Error retrieving orders');
    }
})

router.post('/', async function(req, res) {
    try {
        const {status, value} = req.body;
        const userId = req.userId;

        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({success: false, message: "User not found", data: {}});
        }

        const newOrder = await Order.create({
            value,
            status,
            userId
        })

        return res.status(201).json({success: true, message: 'Order created', data: newOrder})
    } catch (error) {
        handleErrorResponse(res, error, 'Error creating order');
    }
})
router.put('/:id', async function(req, res) {
    try {
        const userId = req.userId;
        const orderId = req.params.id;

        const user = await User.findByPk(userId);

        if (!user) {
            return res.status(404).json({success: false, message: "User not found", data: {}});
        }

        const order = await Order.findByPk(orderId);

        if (!order) {
            return res.status(404).json({success: false, message: "Order not found", data: {}});
        }

        if (user.dataValues.id !== userId) {
            return res.status(404).json({success: false, message: "Not the same user", data: {}});
        }

        const updatedOrder = await order.update(req.body);

        return res.status(200).json({success: true, message: 'Order updated', data: updatedOrder});

    } catch (error) {
        handleErrorResponse(res, error, 'Error updating user'); 
    }
})

router.delete('/:id', async function(req, res) {
    try {
        const id = req.params.id;

        const order = await Order.findByPk(id);

        if (!order) {
            return res.status(404).json({success: false, message: "Order not found", data: {}});
        }

        await order.destroy();

        return res.status(200).json({success: true, message: "Order was deleted", data: {}});
    } catch (error) {
        handleErrorResponse(res, error, 'Error deleting order'); 
    }
})

module.exports = router;