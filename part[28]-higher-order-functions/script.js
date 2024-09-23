
//this is higher order function 
function a(b)
{
    console.log(typeof b);
    // console.log("hello higher order function",b);
}

a('hello');
a({name:'ayush', age:35});
a([1,23,4,5,3,6]);

console.log(typeof a);
console.dir(a);//object from ma print karate hai .

//callback function 
a(function(){
    console.log("callback function ")
})



//higher order function 
function sayHii(){
    return "hello";
} 
function greeting (helloMessage,name){
    console.log(helloMessage()+name);
}

greeting(sayHii,"javaScript")
//hello JavaScript