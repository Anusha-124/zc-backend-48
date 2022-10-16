const express = require('express');
const mongoose = require('mongoose')
const cors = require ('cors')
const app = express();
const APIRouter = require("./Routes/APIRouter");



const PORT = process.env.PORT || 5003;
const URI = 'mongodb://127.0.0.1:27017/batch48edureka'

app.use(express.json()); // convert string JSON data to pure json data
app.use(express.urlencoded({ extended: false })); // normal post data  to json data
app.use(cors());


app.use("/", APIRouter);
console.log('connecting to db...');



mongoose.connect(URI).then(() => {
    app.listen(PORT, () => {
        console.log('db connected successfully!!!!....')
        console.log("zomato  api is running on port :", PORT);
        console.log("hello...fffff")

    });

}).catch((error) => {
    console.log(error);
})
