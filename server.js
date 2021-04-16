const express = require ("express");
const app = express();

const port = process.env.PORT || 3001;
const mongoose = require ("mongoose");

app.use(express.urlencoded({extended:true}))
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/db")
app.listen(port, function() {
    console.log("app online", port)
})