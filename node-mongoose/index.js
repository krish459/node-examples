const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect =mongoose.connect(url);

connect.then((db)=>{
   console.log('Connected correctly to the server');
   
   Dishes.create({
       name: 'Pizza_four',
       description: 'round bread'
   })

//    newDish.save()
   .then((dish) => {
       console.log(dish);

       return Dishes.findByIdAndUpdate(dish._id,{
           $set : {description: 'Updated test'}
        },{
            new: true 

       }).exec();
   })
   .then((dishes)=>{
       console.log(dishes);

       dishes.comments.push({

        rating: 4,
        comment: 'Amazing',
        author: 'Prachi shah'
       });

       return dishes.save();

    })
    .then((dish)=>{
        console.log(dish);

       return Dishes.remove({});
   })
   .then(()=>{
       return mongoose.connection.close();
   })
   .catch((err) => {
       console.log(err);
   });
});