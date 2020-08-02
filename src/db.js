
var MongoClient = require('mongodb').MongoClient;
//MongoClient.connect("mongodb://localhost:27017/QuizSystem", { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
MongoClient.connect("mongodb://localhost:27017", {useNewUrlParser : true, useUnifiedTopology : true}, function(err, db) {
    if(err) {
        console.error(err);
        return;
    }


});


