const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true }, (err, client) =>{

    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to the server")

    const dbName = "TodoApp";
    var db = client.db(dbName);

    // .find({
    //     _id : new ObjectID("5b55810abad82db3cfbbb964")
    // })

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    //     // console.log(JSON.stringify(count, undefined, 2));
    // }, (err)=>{
    //     console.log("Unable to fetch Todos", err);
    // });

    db.collection('Users').find({name: 'Bharat'}).toArray().then((docs)=>{
        console.log('Users:');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        console.log("Unable to fetch users", err);
        
    });


});
