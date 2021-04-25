const Product = require('../models/product');
const router = require('express').Router();

//create the new product

router.post('/', async(req, res) => {

    const product = await Product.create(req.body);
    if (!product) {
        req.status(404).json({ success: false, message: 'Product does not created' })
    }
    res.status(201).json({
        success: true,
        product
    })
});

router.get('/', async(req, res) => {
    const product = await Product.find({});
    if (!product) {
        res.status(500).json({ success: false, message: 'Product does not exists' });
    }
    res.status(200).json({
        success: true,
        product
    })

});

module.exports = router;