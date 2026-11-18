let res= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        return reject("Promise Not Kept");
    },1000);
});

res.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log(" -- completed");
    
})