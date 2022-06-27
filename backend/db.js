const mongoose= require('mongoose');

const mongooseUrl='mongodb://localhost:27017/iNoteBook';


const connectToMongoose = ()=>{
    mongoose.connect(mongooseUrl,()=>{
        console.log('connecting to mongo successfully');
    })
}

module.exports=connectToMongoose;