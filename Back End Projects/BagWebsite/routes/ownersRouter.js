const express = require("express");
const router = express.Router();
const ownerModel = require('../models/owner-model')

if (process.env.NODE_ENV = "development") {
    router.post("/create", async (req, res) => {
        let owners = await ownerModel.find();
        if (owners.length > 0) {
            return res.status(502).send("Your dont have permission to create owner");
        }

        let {fullname,password,email}=req.body;
        let createdOwner = await ownerModel.create({
            fullname,
            password,
            email,
        })
        res.status(201).send(createdOwner);

    }); 
}

router.get("/admin", (req, res) => {
    let success = req.flash("success") || [];
    res.render('createproducts', { success });
});
router.get("/", (req, res) => {
    res.redirect('admin')
});


module.exports = router;