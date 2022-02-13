const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url, (err, client) => {

    assert.equal(err,null);

    console.log('Connected correctly to the server');

    const db = client.db(dbname);

    dboper.insertDocument(db , {name:"Dosa", description: 'paper round '}, 'dishes', (result)=>{

        console.log('insert document :\n', result.ops);

        dboper.findDocument(db,'dishes', (docs)=>{

            console.log('Found documents :\n',docs);

            dboper.updateDocument(db, {name:'Dosa'},{description : 'Updates paper round'} , 'dishes', (result)=>{

                console.log('Updated document : \n', result.result);

                dboper.findDocument(db,'dishes', (docs)=>{

                    console.log('Found documents :\n',docs);
        
                    db.dropCollection('dishes', (result)=>{
                        console.log('Dropped Collection : ', result);

                        client.close();
                    })
                });
                
            });
        });
    });
    // const collection = db.collection('dishes');
    // collection.insertOne({"name":"pizza","description":"round bread"},(err,result)=>{
    //     assert.equal(err,null);
    //     console.log('after Insert:\n');
    //     console.log(result.ops);

    //     collection.find({}).toArray((err,docs) => {
    //         assert.equal(err, null);

    //         console.log('Found:\n');
    //         console.log(docs);

    //         db.dropCollection('dishes',(err,result) => {
    //             assert.equal(err, null);
    //             client.close();

    //         });

    //     });

    // });

});