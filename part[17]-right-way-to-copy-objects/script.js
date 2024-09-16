const fruits=['A','B','c'];
const myfruits=fruits;
myfruits.push("D");
myfruits.push("E");
console.log(myfruits);
//['A','B','C','D','E']

const user1={
    firstName:"Ayush",
    LastName:"kumar"
}

const user2=user1;

user2.lastName='JatBoy'

console.log(user2);
//FirstName:Ayush
//LastName:Kumar