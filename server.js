const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const config = require('./config/connection');

// const routes = routes need to be made still 

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// app.use('/api', routes)

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