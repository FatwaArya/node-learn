//setup for express
const express = require('express');
const app = express();
//require db
const db = require('./db/mongoose');

const Task = require('./model/task');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

//port
const port = process.env.PORT || 3000;
//parse express json
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);




app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
