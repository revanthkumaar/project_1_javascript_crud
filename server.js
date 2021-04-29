//import express 
const express = require('express')
//extend express properties to my own server application
const firstServerApp = express()
const bodyParser = require('body-parser')

//db connection string and connection function
const MongoClient = require('mongodb').MongoClient;
connectionString = "mongodb+srv://revanth:revanthkumar@cluster0.w9ybg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

MongoClient.connect(connectionString,{useUnifiedTopology:true})
.then(client=> {
    console.log('connected to db')
    const db = client.db('my-tasks')
    const tasksCollection = db.collection('tasks')
//Middlewares
    
    firstServerApp.use(bodyParser.urlencoded({extended:true}))

//Routes
    //CREATE 
    firstServerApp.post('/tasksUpdate',(req,res) => {
        tasksCollection.insertOne(req.body)
        .then(result => {
            res.redirect('/')
        })
        .catch(error => console.error(error)) 
    })

    firstServerApp.get('/',(req,res) => {
        const data = db.collection('tasks').find()
        console.log(data)
    })


    firstServerApp.put(/*...*/)
    firstServerApp.delete(/*...*/)


})

//GET: get(endpoint,callback function)

firstServerApp.listen(3001, function() {
    console.log('the server is up and active')
})