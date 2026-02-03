const fs = require("fs");

// fs.mkdir("./classwork/java", {recursive: true} , (err) => {
// if (err)throw err;
// console.log("folder created successfully");
// });

fs.rmdir("./java", (err) => {
if (err) console.log(err.message);
console.log("File deleted");
});

