const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/student_notes")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

const noteSchema = new mongoose.Schema({
    title: String,
    subject: String,
    description: String,
    created_date: {
        type: String,
        default: () => new Date().toISOString().split("T")[0]
    }
});

const Note = mongoose.model("Note", noteSchema);

app.post("/notes", async (req, res) => {
    try {
        const note = new Note(req.body);
        await note.save();
        res.json({ message: "Note Added Successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.get("/notes", async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put("/notes/:id", async (req, res) => {
    try {
        await Note.findByIdAndUpdate(req.params.id, {
            $set: req.body
        });
        res.json({ message: "Note Updated Successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete("/notes/:id", async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.json({ message: "Note Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
