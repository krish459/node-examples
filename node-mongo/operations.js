const  assert = require('assert');
const Collection = require('mongodb/lib/collection');
const { callbackify } = require('util');

exports.insertDocument = (db, document, Collection , callback) =>{
    const coll = db.collection(Collection);
    coll.insert(document,(err,result)=>{
        assert.equal(err, null);
        console.log("Inserted "+ result.result.n + " documents into the collection "+Collection);
        callback(result);
    })

};
exports.findDocument = (db, Collection , callback) =>{
    const coll = db.collection(Collection);
    coll.find({}).toArray((err, docs)=>{
        assert.equal(err, null);
        callback(docs);

    });

};
exports.removeDocument = (db, document, Collection , callback) =>{
    const coll = db.collection(Collection);
    coll.deleteOne(document, (err,result)=>{
        assert.equal(err, null);
        console.log(" Removed the document ", document);
        callback(result);
    })

};
exports.updateDocument = (db, document, update, Collection , callback) =>{
    const coll = db.collection(Collection);
    coll.updateOne(document, { $set: update } , null , (err,result)=>{
        assert.equal(err, null);
        console.log("Updated the document with ", update);
        callback(result);
    });

};