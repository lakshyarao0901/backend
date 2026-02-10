// practices for promises //

// console.log("hii lakshya");
// // code

// const p1 = fetch("https://github.com/fedspendingtransparency/usaspending-api");
// direct call send PENDING
// console.log(p1);

// p1.then((respone)=>{
//     console.log(respone);
// })
// now data in byte form //


// const p2 = p1.then((respone)=>{
//     return respone.json;
// })


// p2.then((response)=>{
//     console.log(response)
// })

// console.log("byy lakshya");


// ========================================== code for Promise chaning =======================
// new Promise ((resolve)=>{
//     resolve(20);
// })
// .then((num)=>{
//     return num*3;
// })
// .then((num)=>{
//     return num*7;
// })
// .then((result)=>{
//     console.log(result);
// })
// .finally(()=>{
//     console.log("Ye he hamara result");
// })

const p2 = new Promise((resolve,reject)=>{
    resolve("data is undefined");
})
p2.then((Response)=>{
    console.log(Response);
}).catch((error)=>{
    console.log(error);
})
p2.finally(()=>{
    console.log("ye he coding")
})