const  assert = require('assert');
const Collection = require('mongodb/lib/collection');
const { callbackify } = require('util');

exports.insertDocument = (db, document, Collection , callback) =>{
    const coll = db.collection(Collection);
    return coll.insert(document);

};
exports.findDocument = (db, Collection , callback) =>{
    const coll = db.collection(Collection);
    return coll.find({}).toArray();

};
exports.removeDocument = (db, document, Collection , callback) =>{
    const coll = db.collection(Collection);
    return coll.deleteOne(document)

};
exports.updateDocument = (db, document, update, Collection , callback) =>{
    const coll = db.collection(Collection);
    return coll.updateOne(document, { $set: update } , null);

};