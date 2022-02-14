const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require('./operations');

const url = 'mongodb://localhost:27017/';
const dbname = 'conFusion';

MongoClient.connect(url).then((client) => {

    // assert.equal(err,null);

    console.log('Connected correctly to the server');

    const db = client.db(dbname);

    dboper.insertDocument(db , {name:"Dosa", description: 'paper round '}, 'dishes').then((result)=>{

        console.log('insert document :\n', result.ops);

        return dboper.findDocument(db,'dishes')
    })
        .then((docs)=>{

            console.log('Found documents :\n',docs);

            return dboper.updateDocument(db, {name:'Dosa'},{description : 'Updates paper round'} , 'dishes')
        })
        .then((result)=>{

                console.log('Updated document : \n', result.result);

                return dboper.findDocument(db,'dishes')
        })
        .then((docs)=>{

                    console.log('Found documents :\n',docs);
        
                    return db.dropCollection('dishes')
        })
        .then((result)=>{
                        console.log('Dropped Collection : ', result);

                        client.close();
                    })
        })               
        .catch((err) => console.log(err));

