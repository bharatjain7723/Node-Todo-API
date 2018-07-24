const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, client)=>{

    if(err){
        console.log("Unable to connect to Mongodb server");
    }
    console.log("Connected to mongodb server");

    var dbName = 'TodoApp';
    var db = client.db(dbName); 

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5b56d427a5922521655e536c")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
        
    // });


    // db.collection('Users').findOneAndUpdate({
    //     _id: new ObjectID("5b56d5e9a5922521655e53f4")
    // }, {
    //     $set: {
    //         name: 'Bharat'
    //     }
    // },{
    //     $inc: {
    //         age: 1
    //     }
    // },{
    //     returnOriginal : false
    // }).then((result)=>{
    //     console.log(result);
        
    // });


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b56d5e9a5922521655e53f4")
    }, {
        $inc: {
            age: 1
        },
        $set: {
            name: 'Bhaskar'
        }
    }, {
        returnOriginal : false
    }).then((result)=>{
        console.log(result);
        
    });
});