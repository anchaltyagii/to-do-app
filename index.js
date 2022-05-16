const tasks = require('./routes/tasks');
const Task = require("./models/task");
const connection = require('./db');
const cors = require('cors');
const express = require('express');
const app = express();

connection();

app.use(express.json());
app.use(cors())

app.get("/todo/items", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.send(error);
    }
});

app.post("/todo/item", async (req, res) => {
    try {
        const task = await new Task(req.body).save();
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

app.put("/todo/item/:id", async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

app.delete("/todo/item/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        res.send(task);
    } catch (error) {
        res.send(error);
    }
});

const port = process.env.port || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`))