const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=9cd4e4a3a44ed28dfdb33597a96c6d6e&query=45,-75&units=m'

const request = http.request(url, (response)=>{

    let data= ''

    response.on('data', (chunk)=>{
        data = data + chunk.toString()
    })

    response.on('end', ()=>{    

        const body = JSON.parse(data)
        console.log(body);
    })
})

request.on('error', (error)=>{
    console.log('An Error', error);
})

request.end() 