//import mongodb with const

//import mongo client with const
const { MongoClient, ObjectId } = require('mongodb');;
//import mongo ObjectId with const

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Arslan',
    //     age: 1000
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.insertedIds)
    // })
    // db.collection('users').insertMany([

    //     {
    //         name: 'Fatwa',
    //         age: 16
    //     },
    //     {
    //         name: 'Ahmed',
    //         age: 17
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.insertedIds)
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew inspection',
    //         completed: false
    //     },
    //     {
    //         description: 'Buy groceries',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert task')
    //     }
    //     console.log(result.insertedIds)
    // })

    //read data from mongodb
    // db.collection('users').findOne({ _id: new ObjectId("61f808ee60d3552f293b2772") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to find user')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 16 }).toArray((error, users) => {
    //     console.log(users)
    // });
    // db.collection('users').find({ age: 16 }).count((error, count) => {
    //     console.log(count)
    // });

    //user FindOne to fetch the last task by its id
    db.collection('tasks').findOne({ _id: new ObjectId("61f7ee729398333d1ceec296") }, (error, task) => {
        if (error) {
            return console.log('Unable to find task')
        }
        console.log(task)

    })

    db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
        if (error) {
            return console.log('Unable to find task')
        }
        console.log(tasks)
    })
})
