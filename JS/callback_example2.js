//Example 2//

function greet(fn){
    let str = "hello world!";
    fn(str)
}

greet( (str)=>{
    console.log(str.length);
});