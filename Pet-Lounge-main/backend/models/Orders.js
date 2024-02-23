//models-Orders.js

const mongoose = require('mongoose')

const { Schema } = mongoose;

const OrderSchema = new Schema({
    useremail: {
        type: String,
        required: true,
        unique: true
    },
    order_data: {
        type: Array,
        required: true,
    },

});

module.exports = mongoose.model('order', OrderSchema)