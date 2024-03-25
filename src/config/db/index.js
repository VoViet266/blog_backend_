const mongoose = require('mongoose'); 
const url = 'mongodb://127.0.0.1:27017/mydatabase';
 async function connect() {
    try{
        await mongoose.connect(url ,{
       
        });
        console.log('Connect successfully!!!');
    }
    catch(error){ 
        console.log('Connect failure!!!');
    }
}
module.exports = { connect }  
