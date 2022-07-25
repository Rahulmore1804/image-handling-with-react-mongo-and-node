'use strict';

const mongoose = require('mongoose');

module.exports=()=>{
    mongoose.connect(
        "mongodb+srv:%40@cluster0.qvjgby3.mongodb.net/todolistDB",
        { useNewUrlParser: true }
      ).then(()=> console.log("mongoDB connected...."));
}