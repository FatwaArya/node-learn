const fs = require('fs')
// const book ={
//     title: 'hello word',
//     author: 'potter'
// }

// const bookJSON =JSON.stringify(book)
// console.log(bookJSON)

// const parsedData = JSON.parse(bookJSON)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON)
user.name= 'Fatwa'
user.age = 16

const userJSON = JSON.stringify(user);// method converts a JavaScript object or value to a JSON string, optionally
fs.writeFileSync('1-json.json', userJSON)