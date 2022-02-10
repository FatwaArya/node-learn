//setup for express
const express = require('express');
const app = express();
//require db
const db = require('./db/mongoose');
//import user and task models
const User = require('./model/user');
const Task = require('./model/task');

//port
const port = process.env.PORT || 3000;
//parse express json
app.use(express.json());

app.post('/users', (req, res) => {
    const user = new User(req.body);

    user.save().then(() => {
        res.status(201).send(user);
    }).catch((error) => {
        res.status(400).send(error);

    })
});
app.get('/users', (req, res) => {
    User.find().then((users) => {
        res.send(users);
    }).catch((error) => {
        res.status(500).send(error);

    })
});
//fetch individual user
app.get('/users/:id', (req, res) => {
    const _id = req.params.id;
    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send('User not found');
        }

        res.send(user)
    }).catch((error) => {
        res.status(500).send(error);
    })
})


app.post('/tasks', (req, res) => {
    const task = new Task(req.body);

    task.save().then(() => {
        res.status(201).send(task);
    }).catch((error) => {
        res.status(400).send(error)
    })
})
//fetch all tasks
app.get('/tasks', (req, res) => {
    Task.find().then((tasks) => {
        res.send(tasks);
    }).catch((error) => {
        res.status(500).send(error);
    })
})
//featch individual task
app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id;

    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send('Task not found!')
        }
        res.send(task)
    }).catch((error) => {
        res.status(500).send(error);
    })

})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
