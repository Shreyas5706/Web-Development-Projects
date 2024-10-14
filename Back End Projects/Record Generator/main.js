const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
let root = path.join(__dirname);
app.use(express.static(root));

app.get('/', (req, res) => {
    res.sendFile(path.join(root, 'Project.html'));
});


app.post('/save-to-databse', (req, res) => {
    const records = req.body;

    if (records && records.length > 0) {
        require('./index.mongodb.js').SavetoDatabase(records);  // Call the function to save to MongoDB
        res.json({ "message": 'Records saved successfully!' });
    }
    else {
        res.status(400).json({ "message": 'No records provided.' });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
