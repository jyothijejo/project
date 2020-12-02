const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderItems: [{
        name:{ type: String, required: true},
        qty :{ type: String, required: true},
        image:{ type: String, required: true},
        price:{ type: String, required: true},
        product:{type: mongoose.Schema.Types.ObjectId,ref:"Product",required: true}
    }],
    shippingAddress:{
        fullName:{ type: String, required: true},
        address:{ type:String, required: true},
        city:{ type:String, required: true},
        postalCode:{ type:String, required: true},
        country:{ type:String, required: true}
    },
    // paymentMethod:{ type: String, required: true},
    // itemsPrice:{ type: String, required: true},
    // shippingPrice:{ type: String, required: true},
    // taxPrice:{ type: String, required: true},
    // totalPrice:{ type: String, required: true},
    isPaid:{ type: Boolean, default: false},
    isDelivered:{ type: Boolean, default: false},
    delivered:{type:Date},
    user:{ type:mongoose.Schema.Types.ObjectId,ref:"User",required: true}
    
},{timestamps:true})

const Order = mongoose.model('Order', orderSchema);
  
module.exports=  Order;