const mongoose = require('mongoose');

const productDetailSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default: 0
    },
    ratings: {
        type: Number,
        default: 0
    }
});

//use pre middleware
productDetailSchema.pre("save", function(next) {

    if (this.name === null) {
        console.log('Name should not be null');
    }

    next();
})

module.exports = mongoose.model('ProductDetail', productDetailSchema);