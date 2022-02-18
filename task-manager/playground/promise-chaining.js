require('../src/db/mongoose')
const User = require('../src/model/user')

//ObjectId("620109e33baf21e994654830")



// User.findByIdAndUpdate("62020b713c886532004241a7", { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({
//         age: 1
//     }).then((result) => {
//         console.log(result)
//     })
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('620109e33baf21e994654830', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log()
})