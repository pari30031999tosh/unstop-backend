const express = require('express');
const bcrypt = require('bcrypt');
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routers/users');
const PORT = 3000;
const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET','POST']
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use('/',router )

app.listen(5000, ()=> {
    console.log('server is listening at 8000')
})