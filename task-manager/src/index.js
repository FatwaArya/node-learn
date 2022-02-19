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

app.post('/users', async(req, res) => {
    const user = new User(req.body);

    try{
    await user.save()
    res.status(201).send(user);
    }catch(e){
        res.status(400).send(e);
    }


    // user.save().then(() => {
    //     res.status(201).send(user);
    // }).catch((error) => {
    //     res.status(400).send(error);

    // })
});
app.get('/users', async (req, res) => {
    try{
        const users = await User.find({});
        res.send(users);
    }catch(e){
        res.status(500).send();
    }
});
//fetch individual user
app.get('/users/:id', async(req, res) => {
    const _id = req.params.id;

try {
    const user = await User.findById(_id);
    if(!user){
        return res.status(404).send();
    }

    res.send(user);
}catch(e){
    res.status(500).send()
}


})


app.post('/tasks', async(req, res) => {
    const task = new Task(req.body);

    try{
        await task.save();
        res.status(201).send(task);
    }catch(e){
        res.status(500).send()
    }
})
//fetch all tasks
app.get('/tasks', async(req, res) => {
    try{
        const tasks = await Task.find({});
        res.send(tasks);
    }catch(e){
        res.status(500).send();
    }

    
})
//featch individual task
app.get('/tasks/:id', async(req, res) => {
    const _id = req.params.id;

    try{
        const task = await Task.findById(_id);
        if(!task){
            return res.status(404).send('no task found');
        }
        res.send(task);
    }catch(e){
        res.status(500).send();
    }
  

})
app.patch('/users/:id', async (req, res)=>{
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates!'})
    }
    try{ 
        const user = await User.findByIdAndUpdate( req.params.id, req.body, {new: true, runValidators: true});
        if(!user){
            return res.status(404).send('no user found');
        }
        res.send(user);
    }catch(e){
        res.status(400).send(e);
    }
})

app.patch('/tasks/:id', async (req, res)=>{
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isValidUpdate = updates.every((update)=> allowedUpdates.includes(update))
    
    if(!isValidUpdate){
        return res.status(404).send({error: 'Invalid updates!'})
    }
    try{
        const task = await Task.findByIdAndUpdate( req.params.id, req.body, {new: true, runValidators: true});
        if(!task){
            return res.status(404).send('no task found');
        }
        res.send(task);
    }catch(e){
        res.status(400).send(e);
    }
})
app.delete('/users/:id', async(req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).send('no user found');
        }
        res.send(user);
    }catch(e){
        res.status(500).send();
    }

})
app.delete('/tasks/:id', async(req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task){
            return res.status(404).send('no task found');
        }
        res.send(task);
    }catch(e){
        res.status(500).send(e);
    }
})

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
