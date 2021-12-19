const geocode = require('./util/geocode')
const forecast   = require('./util/forecast')

const city = process.argv[2]
 
if (!city) {
    console.log('PROVIDE ADDRESS');
}else{
    geocode(city, (error , {latitude , longtitude , place_name})=>{
    if (error) {
        return console.log('Error', error)
    }forecast(latitude, longtitude, (error, forecastData) => {
        if (error) {
            return console.log('Error', error)
        }
        console.log(place_name)
        console.log(forecastData)
     })

})

}

