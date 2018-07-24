// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

//Connects to the url, whether of AWS or something else
MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true }, (err, client)=>{
    if(err){
        return console.log("Unable to connect to mongodb server");
    }
    console.log("Connected to mongodb server");
    const dbName = 'TodoApp'

    const db = client.db(dbName);
    db.collection('Todos').insertOne({
        text: 'something to do2',
        completed: true
    }, (err, result) =>{
        if(err){
            return console.log("Unable to insert todo", err);          
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.collection('Users').insertOne({
        name: 'Bhaskar',
        age: 22,
        location: 'Delhi' 
    }, (err, result)=>{
        if(err){
            return console.log("Unable to insert Users", err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});