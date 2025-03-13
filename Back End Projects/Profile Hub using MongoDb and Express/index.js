const express = require('express')
const app = express()
const port = 3005
const path = require ('path');

app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'Public')));
const usermodel = require('./models/user')

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/read', async(req, res) => {
    let allusers= await usermodel.find();
    res.render('read',{users:allusers});
}) 

app.post('/create', async(req, res) => {
    let{name,email,image}= req.body;
    let CreatedUser = await usermodel.create({
        name,
        email,
        image
    })
    res.redirect('/read');
}) 
app.get('/delete/:ids', async (req,res)=>{
    let deleteduser= await usermodel.findOneAndDelete({_id:req.params.ids});
    res.redirect("/read");
})

app.get('/edit/:userid', async (req,res)=>{
    let user= await usermodel.findOne({_id:req.params.userid});

    res.render("edit",{user});
})

app.post('/update/:userid', async (req,res)=>{
    let{name,email,image}= req.body;
    let user= await usermodel.findOneAndUpdate({_id:req.params.userid}, {name,email,image},{new:true});

    res.redirect('/read');
})

 
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
