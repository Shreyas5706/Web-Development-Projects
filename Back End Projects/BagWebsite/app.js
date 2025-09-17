const express =require("express");
const app = express();
const cookieparser = require('cookie-parser');
const path = require("path");
const expressSession=require('express-session');
const flash=require('connect-flash');
const mongooseConnection = require("./config/mongoose-connection");

const ownersRouter = require("./routes/ownersRouter");
const Router = require("./routes/index");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");

require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());
app.use(
    expressSession({
        resave:false,
        saveUninitialized:false,
        secret:process.env.EXPRESS_SESSION_SECRET
    })
)
app.use(flash());
app.use(express.static(path.join(__dirname , "public")));
app.set("view engine", "ejs");

app.use("/owners",ownersRouter);
app.use("/",Router);
app.use("/users",usersRouter);
app.use("/products",productsRouter);

mongooseConnection.once("open", () => {
    console.log("MongoDB connection established");
    app.listen(3000, () => {
        console.log("Server started on port 3000");
    });
});

mongooseConnection.on("error", (err) => {
    console.error("MongoDB connection error:", err);
});
