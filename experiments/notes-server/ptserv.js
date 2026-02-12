// const A = require("http");
// const B = A.createServer((req,res)=>{
//     if(req.method==="GET"){
//         res.end("server is running");
//     }
//     else if(req.method==="PUT"){
//         res.writeHead(200,{"content-type":"text/plain"});
//         res.end(" req recieved ")
//     }
// })
// B.listen(3000);



// const http = require("http");
// const B =http.createServer((req, res) => {
//   if (req.method === "PUT") {
//     let body = "";
//     req.on("data", (chunk) => {
//       body += chunk;   
//     });
//     req.on("end", () => {
//       console.log("Received Data:", body);
//       res.writeHead(200, { "Content-Type": "text/plain" });
//       res.end("Data updated successfully");
//     });

//   }

// })
// B.listen(3000);

// console.log("Server running on 3000");


