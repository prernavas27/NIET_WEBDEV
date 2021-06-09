//function body
function callme(name){
    console.log("hi am prerna ");
    console.log(" hi "+name);
return 10;
}
//calling the function
//console.log(callme());
//console.log(callme);
//undefined because it return no value
let val=callme();
//console.log(val);

//
//callme('steve');

//call back functions ans high order functions
let sayhi; //undefined 
sayhi = function(a, b){
console.log('i am saying hii');
return a*b;
}  //sayhi can take function 
let a=2;
let b=5;
sayhi(a, b);
