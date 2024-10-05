const user={
    fistName:"Ayush",
    lastName:"kumar",
    age:24,
    getAgeYear:function(){
        return new Date().getFullYear()-user.age

    }
}


function createUser(){
    const user={
        firstName,
         LastName,
         age,
    
    getAgeYear(){
        return new Date().getFullYear()-user.age
    }
}
return user
}


const user1=createUser('ayush','kumar',34);
const user2=createUser('ayush1','kumar2',36);

console.log(user1);
console.log(user2); 