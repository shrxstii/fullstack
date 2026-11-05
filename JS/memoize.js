function memoize(fn){
    const cache={};
    return function (x,y){
        const key = "${x}, ${y}";
        if(cache[key]){
            console.log('from cache');
            return cache[key];
        }
        const res= fn(x,y);
        cache[key]=res;
        return res;
    }
}
const  add =memoize(function(x,y){
    return x+y;
});

console.log(add(1,2));
console.log(add(1,2));