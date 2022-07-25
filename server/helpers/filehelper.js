'use strict';
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'uploads');
    },
    filename: (req,file,cb)=>{
        cb(null,new Date().toISOString().replace(/:/g,'-')+'-'+file.originalname)
    }
})

const filefilter = (req,file,cb)=>{
    if(file.mimetyp=== 'image/png' ||file.mimetyp=== 'image/jpg' ||file.mimetyp=== 'image/jpeg'){
        cb(null,true);
    
    }else{
        cb(null,false);
    }
}

const upload = multer({storage :storage, filefilter :filefilter});

module.exports = {upload}