console.log("Closures - Memonization");

function add(fn){
    let obj={};
    return function(x,y){
        let key= `x,y`;
        if (obj.hasOwnProperty(key)){
            console.log('from cache');
            return obj[key];
            
        }

        let res = fn(x,y);
        obj[key]=res;
        return obj[key];
    }
}
const myAdd = add((a,b)=>{
    return a+b;
});