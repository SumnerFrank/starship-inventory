const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const config = require('./config/connection');
const apiRoutes = require('./routes/api');

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api', apiRoutes);

//404 response
app.use((req,res) => {
    res.status(404).end();
});

//function needed to start server
config.connect(err => {
    if (err) throw err;
    console.log('successful connection');
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })
});