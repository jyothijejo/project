const express = require('express');

const orderRouter = express.Router();
const Order  = require('../models/orderModel.js')
const expressAsyncHandler = require('express-async-handler');
const { isAuth } = require('../utils.js');

orderRouter.post('/',isAuth, expressAsyncHandler(async (req, res)=>{
    if(req.body.orderItems.length === 0){
        res.status(400).send({ message:"cart is empty"})
    }else{
        const order = new Order({
            orderItems :req.body.orderItems,
            shippingAddress :req.body.shippingAddress,
            paymentMethod:req.body.paymentMethod,
            itemsPrice:req.body.itemsPrice,
            shippingPrice:req.body.shippingPrice,
            taxPrice:req.body.taxPrice,
            totalPrice:req.body.totalPrice,
        });

        const createdOrder = await order.save();
        res.status(201).send({message:"new order created", order:createdOrder})
    }
})) 


module.exports = orderRouter