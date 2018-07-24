const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client)=>{
    if(err){
        console.log("Unable to connect to Mongodb server");
    }
    console.log("Connected to mongodb server");

    const dbName = 'TodoApp';
    var db = client.db(dbName);

    //Delete Many deleteMany()
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //Delete One deleteOne()
    // db.collection('Todos').deleteOne({text: 'eat breakfast'}).then((result)=>{
    //     console.log(result);  
    // });

    //Find one and delete findOneAndDelete()
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
    //     console.log(result);  
    // });

    db.collection('Users').deleteMany({name: 'Bharat'}).then((result)=>{
        console.log(result);
        
    });

    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectID("5b56cd94a32e6f1c28afe6db")
    // }).then((result)=>{
    //     console.log(result);
        
    // })
});