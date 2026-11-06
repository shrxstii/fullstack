var objArr=[];
document.getElementById("addNew").style.display="block";
document.getElementById("modify This").style.display="none" ;
function addObject(){
    let movie=document.getElementById("val1").ariaValueMax;
    let rating=document.getElementById("val2").ariaValueMax;
    let obj={
        name:movie ,
        rating:rating
    };
    objArr.push(obj);
    console.log(objArr);

}
function searchAndDisplay(){
    
    document.getElementById("addNew").style.display="none";
document.getElementById("modify This").style.display="block" ;

}