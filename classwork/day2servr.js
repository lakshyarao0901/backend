const http = require("http");
const A = http.createServer((req,res)=>{
     const method = req.method;
     const url = req.url;
     if(method==="GET"&&url==="/"){
        res.end("hello mere sher");
     }
     console.log(method,url);
});

A.listen(7000, ()=>{
    console.log("server listning")
});
