// practices for promises //

console.log("hii lakshya");
// code

const p1 = fetch("https://github.com/fedspendingtransparency/usaspending-api");
// direct call send PENDING
// console.log(p1);

// p1.then((respone)=>{
//     console.log(respone);
// })
// now data in byte form //


const p2 = p1.then((respone)=>{
    return respone.json;
})


p2.then((response)=>{
    console.log(response)
})

console.log("byy lakshya");