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
sayhi();
//call back functions ans high order functions
let sayhi; //undefined 
sayhi = function(){
console.log('i am saying hii');
}  //sayhi can take function 
//sayhi();
