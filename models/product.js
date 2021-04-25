const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    productDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductDetail',
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },

});

productSchema.pre("save", function(next) {
    if (this.category.ObjectId === null) {
        console.log('Category is not null');
    }

    next();
})

module.exports = mongoose.model('Product', productSchema);