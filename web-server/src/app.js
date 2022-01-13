const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./util/geocode')
const forecast = require('./util/forecast')
const app = express()



//define path for express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewspath = path.join(__dirname, '../template/views')
const partialPath = path.join(__dirname, '../template/partial')

//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewspath)
hbs.registerPartials(partialPath)

//setup static dir to serve css img and js
app.use(express.static(publicDirectoryPath))

//
app.get('/', (reg, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Fatwa Arya'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Fatwa Arya'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'Fatwa Arya'
    })
})
app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Must provide an address'
        })
    }
    geocode(req.query.address, (error, { latitude, longtitude, place_name } = {}) => {
        if (error) {
            return res.send({ error })
        } forecast(latitude, longtitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }
            res.send({
                location: place_name,
                forecast: forecastData,
                address: req.query.address
            }

            )

        })

    })

})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'Must provide a search term'
        })
    }
    res.send({
        product: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404page', {
        title: 'Help',
        errorMsg: 'Help Article Not Found',
        name: 'Fatwa Arya'
    })
})

app.get('*', (req, res) => {
    res.render('404page', {
        title: '404',
        erorMsg: '404: Page not found',
        name: 'Fatwa Arya'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000');
})