const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/book_finder")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    category: String,
    price: Number,
    rating: Number,
    year: Number
});

const Book = mongoose.model("Book", bookSchema);


app.get("/books/search", async (req, res) => {
    const title = req.query.title;
    const books = await Book.find({
        title: { $regex: title, $options: "i" }
    });
    res.json(books);
});

app.get("/books/category/:category", async (req, res) => {
    const books = await Book.find({
        category: req.params.category
    });
    res.json(books);
});

app.get("/books/sort/:field", async (req, res) => {
    const field = req.params.field;
    let sortOption = {};

    if (field === "price") sortOption = { price: 1 };
    if (field === "rating") sortOption = { rating: -1 };

    const books = await Book.find().sort(sortOption);
    res.json(books);
});

app.get("/books/top", async (req, res) => {
    const books = await Book.find({ rating: { $gte: 4 } })
        .sort({ rating: -1 })
        .limit(5);
    res.json(books);
});


app.get("/books", async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    const skip = (page - 1) * limit;

    const books = await Book.find()
        .skip(skip)
        .limit(limit);

    res.json(books);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
