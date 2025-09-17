const express = require("express");
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const usermodel=require("../models/usermodel")
const productModel = require('../models/productModel');

router.get("/", (req, res) => {
    let error = req.flash("error");
    res.render("index", { error,loggedIn:false });
})


router.get("/addtocart/:productid",isLoggedIn,async (req, res) => {
    let user = await usermodel.findOne({email:req.user.email});
    // Filter out invalid cart items
    user.cart = user.cart.filter(item => item.product);
    let existingItem = user.cart.find(item => item.product.toString() === req.params.productid);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        user.cart.push({product: req.params.productid, quantity: 1});
    }
    await user.save();
    req.flash("success","product added to your cart successfully ");
    res.redirect("/shop");
})
router.get("/cart",isLoggedIn,async (req, res) => {
    let user = await usermodel.findOne({email:req.user.email}).populate("cart.product");
    console.log("User cart after populate:", user.cart);
    // Filter out items where product is null (deleted products)
    user.cart = user.cart.filter(item => item.product !== null);
    if (user.cart && user.cart.length > 0) {
        console.log("First cart item:", user.cart[0]);
        if (user.cart[0].product && user.cart[0].product.image) {
            console.log("Image type:", typeof user.cart[0].product.image);
        }
    }
    let totalMRP = 0;
    let totalDiscount = 0;
    user.cart.forEach(item => {
        if (item.product) {
            totalMRP += item.product.price * item.quantity;
            totalDiscount += (item.product.discount || 0) * item.quantity;
        }
    });
    let platformFee = 20;
    let shippingFee = 0;
    let totalAmount = totalMRP - totalDiscount + platformFee + shippingFee;
    res.render("cart", {user, totalMRP, totalDiscount, platformFee, shippingFee, totalAmount});
})

router.post("/increment/:index", isLoggedIn, async (req, res) => {
    let user = await usermodel.findOne({email: req.user.email});
    // Filter out invalid cart items
    user.cart = user.cart.filter(item => item.product);
    if (user.cart[req.params.index]) {
        user.cart[req.params.index].quantity += 1;
        await user.save();
    }
    res.redirect("/cart");
})

router.post("/decrement/:index", isLoggedIn, async (req, res) => {
    let user = await usermodel.findOne({email: req.user.email});
    // Filter out invalid cart items
    user.cart = user.cart.filter(item => item.product);
    if (user.cart[req.params.index]) {
        if (user.cart[req.params.index].quantity > 1) {
            user.cart[req.params.index].quantity -= 1;
        } else {
            user.cart.splice(req.params.index, 1);
        }
        await user.save();
    }
    res.redirect("/cart");
})


router.get("/shop", isLoggedIn, async (req, res) => {
    try {
        let products = await productModel.find();
        
    let success=req.flash("success");
        res.render("shop", { products ,success});
    } catch (err) {
        console.log(err);
        res.status(500).send("Error fetching products");
    }
})

module.exports = router;
