const express = require('express'),
mustache = require('mustache-express'),
app = express(),
mainRoute = require('./routes/main-route') ,
cors = require('cors');
app.use('/lib', express.static('lib'))
.use('/js', express.static('js'))
.use('/css', express.static('css'))
.use('/img', express.static('img'))
.use('/', mainRoute)
.use(express.urlencoded({
    extended: false
}))
.use(cors())
.use(express.json())
.engine('mustache', mustache())
.disable('x-powered-by')
.set('view engine', 'mustache');




const port = process.env.PORT || 4034;

app.listen(port, () => {
    console.log(`App running on ${port}`);
})