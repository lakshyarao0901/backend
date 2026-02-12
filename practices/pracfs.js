// ========================================= run on cmd =============================//

// var fs = require("fs");
// const path = require("path");
// console.log("Synchronous read method");
// var d = fs.readFileSync("practices/para.txt","utf-8");
// console.log("data is :-" +d);

// ========================== run on server======================================= //

// var A=require('http');
// var fs=require('fs');
// var B = A.createServer(function(req,res){
//     var data = fs.readFileSync("practices/para.txt","utf-8");
//     res.write(data);
//     res.end()
// })
// B.listen(4000);

// ============================== run on server ====================================//

// var A=require('http');
// var fs=require('fs');
// const path = require("path");
// var B = A.createServer(function(req,res){
//     const data = fs.readFileSync("practices/para.txt","utf-8");
//     res.end(data)
// })
// B.listen(4000);

// ============================================ runs no server======================== //
// var A=require('http');
// var fs=require('fs');
// const path = require("path");
// var B = A.createServer(function(req,res){
//     fs.appendFileSync("para.txt","Lakshya is isis","utf-8");
//     const data = fs.readFileSync("para.txt","utf-8");
//     res.end(data)
// })
// B.listen(5000);
// ==================================//


