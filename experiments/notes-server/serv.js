const A = require("http");
const fs = require("fs");
const B = A.createServer((req,res)=>{
    const url = new URL(req.url,"http://${req.headers.host}");
    const pathname = url.pathname;
    if(req.method==="GET" && pathname==="/"){
        res.writeHead(200,{"content-type":"text/plain"});
        res.end("welcome to my notes API");
    }
    else if(req.method==="GET" && pathname==="/not"){
        fs.readFile("not.json","utf-8",(err,data)=>{
            if(err){
                res.writeHead(500);
                res.end("Error he kuch na kuch");
                return;
            }
            res.writeHead(200,{"content-Type":"application.json"});
            res.end(data);
        });
    }
});

B.listen(2000,()=>{
    console.log("server sahi h ");
});
