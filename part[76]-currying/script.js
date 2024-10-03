//Currying is a functional programming 
//technique in JavaScript that breaks down a function with
// multiple arguments into a series of functions that each take a single argument.

function simple(p1,p2,p3){
    return p1+p2+p3;
}

simple(3)(4)(4);


function multiplyByN(x){
    return function(y){
        return x*y
    }
}

const multiplyByFour=multiplyByN(4);

console.dir(multiplyByFour);


function multiply(a,b){
    return a*b;
}

multiply.bind(this,3,4)


function multiply1(x){
    return function(y){
        if(y)return multiply1(x*y)
            return x
    }
}

multiply1(2)(3)(4);