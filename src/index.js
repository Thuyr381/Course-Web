
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const { path } = require('express/lib/application')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db')

//Connect to DB
db.connect()

app.use(express.static('./src/public'))

app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//HTTP logger
app.use(morgan('combined'))

// Template engine 
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views')

//Routes init
route(app)


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})