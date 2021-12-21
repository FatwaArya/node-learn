const path = require('path')
const express = require('express')

const app = express()

//define path for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewspath = path.join(__dirname, '../template')

//setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewspath)
//setup static dir to server css img and js
app.use(express.static(publicDirectoryPath))

//
app.get('',(reg, res)=>{
    res.render('index', {
        title: 'Weather App',
        name: 'Fatwa Arya'
    })
})
app.get('/about', (req,res)=>{
    res.render('about',{
        title: 'About me',
        name: 'Fatwa Arya'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help Page',
        name: 'Fatwa Arya'
    })
})
app.get('/weather', (req, res)=>{
    res.send({
        location: 'Blitar',
        forecast: 'Rainy'
    })
})

 app.listen(3000, ()=>{
     console.log('Server is up on port 3000');
 })