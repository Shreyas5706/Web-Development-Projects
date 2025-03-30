const express = require('express');
const app = express();
const usermodel = require("./models/user");
const postmodel = require("./models/post");
const cookieParser = require('cookie-parser');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/profile", isLoggedIn, async (req, res) => {
    let user = await usermodel.findOne({ email: req.user.email }).populate("post");
    res.render("profile", { user });
});

app.get("/like/:id", isLoggedIn, async (req, res) => {
    let post = await postmodel.findOne({ _id: req.params.id }).populate("user");//This user written is referencing to post.js 4th line(where we are delcaring the type ) "user" word not the (ref: "User") 
    if (post.likes.indexOf(req.user.userid) === -1) {

        post.likes.push(req.user.userid);
    } else {
        post.likes.splice(post.likes.indexOf(req.user.userid), 1)
    }
    await post.save();
    res.redirect("/profile");
});

app.get("/edit/:id", isLoggedIn, async (req, res) => {
    let post = await postmodel.findOne({ _id: req.params.id }).populate("user");//This user written is referencing to post.js 4th line(where we are delcaring the type ) "user" word not the (ref: "User") 
    
    res.render("edit",{post});
});
app.post("/update/:id", isLoggedIn, async (req, res) => {
    let post = await postmodel.findOneAndUpdate({ _id: req.params.id }, {content:req.body.content}).populate("user");//This user written is referencing to post.js 4th line(where we are delcaring the type ) "user" word not the (ref: "User") 
    
    res.redirect("/profile");
});

app.post("/post", isLoggedIn, async (req, res) => {
    let user = await usermodel.findOne({ email: req.user.email });
    let { content } = req.body;

    console.log("Received post request:", { user: user ? user.email : "User not found", content }); // Log the incoming request

    if (!user) {
        console.error("User not found");
        return res.status(404).send("User not found");
    }

    try {
        let post = await postmodel.create({
            user: user._id,
            content
        });
        console.log(post._id);
        user.post.push(post._id); // Ensure this line is updated to use posts

        await user.save();
        res.redirect("profile");
    } catch (error) {
        console.error("Error creating post:", error); // Log any errors
        res.status(500).send("Error creating post");
    }
});

app.post("/login", async (req, res) => {
    let { email, password } = req.body;
    let user = await usermodel.findOne({ email });
    if (!user) return res.status(500).send("Something Went Wrong");

    bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
            let token = jwt.sign({ email, userid: user._id }, "MyKey");
            res.cookie("token", token);
            return res.status(302).redirect("/profile");

        } else res.redirect("/login");
    });
});

app.get("/logout", (req, res) => {
    res.cookie("token", "");
    res.redirect("/login");
});

app.post("/register", async (req, res) => {
    let { email, username, password, age, name } = req.body;
    let user = await usermodel.findOne({ email });
    if (user) return res.status(500).send("User already exists");
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let user = await usermodel.create({
                email,
                username,
                password: hash,
                age,
                name
            });
            console.log(user);
            let token = jwt.sign({ email, userid: user._id }, "MyKey");
            res.cookie("token", token);
            res.redirect("/login");
        });
    });
});

function isLoggedIn(req, res, next) {
    if (req.cookies.token == "") {
        
        res.redirect("/login");

    }
    else {
        let data = jwt.verify(req.cookies.token, "MyKey");
        req.user = data;
        next();
    }
}

app.listen(3000);
 