const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [10, "Setup must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [5, "Punchline must be at least 5 characters long"]
    }
})

const Joke = mongoose.model("joke", JokeSchema);

module.exports = Joke;