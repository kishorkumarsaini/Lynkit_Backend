const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    }
});

CategorySchema.pre("save", function(next) {
    if (this.name === null) {
        console.log('Name should not be null');
    }
    next();
});
module.exports = mongoose.model('Category', CategorySchema);