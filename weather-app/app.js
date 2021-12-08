
const request = require('postman-request')

const url = 'http://api.weatherstack.com/current?access_key=9cd4e4a3a44ed28dfdb33597a96c6d6e&query=&units=m'

// request({url: url, json: true}, (error , response)=>{
//     if(error){
//         console.log('Unable to connect to weather service');


//     }else if (response.body.success === false) {
//         console.log('Unable to find location');
//     }else{
//     let currTemp = response.body.current.temperature
//     let feelLike = response.body.current.feelslike
//     let weatherDesc = response.body.current.weather_descriptions[0]
//     console.log(weatherDesc+', Its is ' + currTemp +' degree, but feels like ' + feelLike + ' degree')

//     }
//     })

// geocoding
const loc = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Banyuwangi.json?access_token=pk.eyJ1Ijoic29zcm9iYWh1IiwiYSI6ImNrd3hncnM2MTBlbHQyd25yeWNma2V1ZTUifQ.ONKmECjlMTq90KfxDsC7Tg&limit=1'

request({url: loc, json: true},(error, response)=>{
    let featureArray = response.body.features

    if (error) {
        console.log('Unable to access internet');
    } else if(featureArray.length===0){
        console.log('Unable to find location');
    } else {
        let latitude = response.body.features[0].center[1]
        let longtitude = response.body.features[0].center[0]
        console.log(latitude , longtitude);
    }
    
})
