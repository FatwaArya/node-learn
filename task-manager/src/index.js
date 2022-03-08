//setup for express
const express = require('express');
const app = express();
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
require('./db/mongoose');

//port
const port = process.env.PORT //parse express json
app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})