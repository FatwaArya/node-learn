// setTimeout(() => {
//     console.log("two second");
// }, 2000);

// const names = ['Fatwa','melfira','rafa']
// const shortNames = names.filter((name) =>{
//     return name.length <= 4
// })

// const geocode = (address, callback) =>{
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longtidude: 0
//         }
//       callback(data)
//     }, 2000);

// }

// geocode('Blitar',(data)=>{
//     console.log(data);
// })
//

// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!


// const add = (a, b, callback) => {

//     setTimeout(() => {
//         callback(a + b)
//     }, 2000);

// }

// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })

//common callback pattern
const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error!', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }
    console.log(result)
})