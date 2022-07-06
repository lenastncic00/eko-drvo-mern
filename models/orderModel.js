const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    name:{
        type:String
      //  require:[true, 'order name required']
    },
    email:{
        type:String,
       // required:[true, 'email is required']
    },
    userid:{
        type:String,
    //    required:true
    },
    orderItems: [],
    shippingAddress:{
        type:Object,
    },
    orderAmount:{
        type:String,
      //  required:true
    },
    isDeliverd:{
        type:String,
      //  required:true
    },
    transectionId:{
        type:String,
       // required:true
    },
}, {timestamps: true})

const orderModel = mongoose.model('orders', orderSchema)

module.exports=orderModel
