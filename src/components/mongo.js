import mongoose from "mongoose";
const mongoose = require("mongoose")
mongoose.connect("https://cloud.mongodb.com/v2/63ff951cc6e49f7101f1464f#/clusters")
    .then(() => {
        console.log("mongoose connected");
    })
    .catch(() => {
        console.log("failed");
    })

const newSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const collection = mongoose.model("collection", newSchema)

module.exports = collection