require('../src/db/mongoose')
const Task = require('../src/model/task')


Task.findByIdAndDelete('6204aee18611a2f0799a1ac4').then((task) => {
    console.log(task)
    return Task.countDocuments({
        completed: false
    }).then((result) => {
        console.log(result)
    })
}).catch((e) => {
    console.log(e)
})

