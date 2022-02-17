require('../src/db/mongoose')
const User = require('../src/model/user')

//ObjectId("620109e33baf21e994654830")



User.findByIdAndUpdate("62020b713c886532004241a7", { age: 1 }).then((user) => {
    console.log(user)
    return User.countDocuments({
        age: 1
    }).then((result) => {
        console.log(result)
    })
}).catch((e) => {
    console.log(e)
})

