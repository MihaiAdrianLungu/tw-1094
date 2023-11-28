const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { handleErrorResponse } = require('../utils');

const User = require('../database/models/User');

const router = express.Router();

router.post('/login', async function(req, res) {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({
            where: {
                email: email
            }
        })

        if(!user) {
            return res.status(404).json({success: false, message: "User not found", data: {}});
        }

        const validPassword = bcrypt.compareSync(password, user.dataValues.password);

        if (!validPassword) {
            return res.status(404).json({success: false, message: "Not the same password", data: {}});
        }

        const token = jwt.sign({id: user.dataValues.id}, process.env.TOKEN_SECRET, {
            expiresIn: '1h'
        })

        return res.status(200).json({success: true, message: "User logged in", data: token})
    } catch (error) {
        handleErrorResponse(res, error, 'Error logging in')
    }
})

module.exports = router;