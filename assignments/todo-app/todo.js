const fs =require("fs");
const path =require("path");

const TODO_FILE = path.join(__dirname,"todos.json");

console.log(TODO_FILE);

fs.unlink("file.txt",(err) => {
if (err) console.log(err.message);
// console.log("File deleted");
});

fs.stat("todos.json", (err, stat) => {
    if (err) console.log(err.message);
    else console.log(stat.isFile());
    
})

fs.mkdir("a/b/c", (err) => {
    console.log(err);
    
});

console.log("hello")