const express = require("express");
const { exec } = require("child_process");

const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://127.0.0.1:27017/lab12DB")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});
const User = mongoose.model("User", userSchema);

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.get("/", async (req, res) => {
    const users = await User.find();

    let html = `
    <html>
    <head>
        <title>LAB12</title>
        <style>
            body { font-family: Arial; padding: 20px; }
            input { margin: 5px; padding: 5px; }
            button { padding: 5px 10px; }
            table { border-collapse: collapse; margin-top: 20px; }
            td, th { border: 1px solid black; padding: 8px; }
        </style>
    </head>
    <body>

    <h2>LAB12 - User Management</h2>

    <form method="POST" action="/add">
        <input name="name" placeholder="Name" required />
        <input name="email" placeholder="Email" required />
        <input name="age" placeholder="Age" required />
        <button type="submit">Add User</button>
    </form>

    <h3>Users List</h3>

    <table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
        </tr>
    `;

    users.forEach(user => {
        html += `
        <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.age}</td>
            <td>
                <a href="/delete/${user._id}">
                    <button>Delete</button>
                </a>
            </td>
        </tr>
        `;
    });

    html += `
    </table>
    </body>
    </html>
    `;

    res.send(html);
});

app.post("/add", async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.redirect("/");
});

app.get("/delete/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.redirect("/");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");

    exec('start "" "http://localhost:3000"');
});
