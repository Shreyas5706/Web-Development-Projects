const express = require("express");
const router = express.Router();
const upload = require("../config/multer-config");
const productModel = require('../models/productModel')

router.get("/", (req, res) => {
    res.send("hello products");
})
router.post("/create", upload.single("image"), async (req, res) => {
    try {
        let { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;

        console.log(typeof productModel);
        console.log(productModel);

        let product = new productModel({
            image: req.file.buffer,
            name,
            price,
            discount,
            bgcolor,
            panelcolor,
            textcolor
        });
        await product.save();
        req.flash("success","Product Created Successfully");
        res.redirect("/owners/admin")
    } catch (err) {
        res.send(err.message);
    }
})

module.exports = router;  