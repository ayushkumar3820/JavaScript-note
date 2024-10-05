// // const user={
// //     fistName:"Ayush",
// //     lastName:"kumar",
// //     age:24,
// //     getAgeYear:function(){
// //         return new Date().getFullYear()-user.age

// //     }
// // }



// // debugger
// function createUser(){
//     const user={
//         firstName,
//          LastName,
//          age,
    
//     getAgeYear:createUser.commonMethods.getAgeYear
// }
// return user
// }
// createUser.commonMethods={
//  getAgeYear(){
//     console.log(this)
//     return new Date().getFullYear()-this.age
// }
// }

// const user1=createUser('ayush','kumar',34);
// const user2=createUser('ayush1','kumar2',36);

// console.log(user1);
// console.log(user2); 

// function SayHi(){
//     console.log("hello",this);
// }


function createUser(firstName,LastName,Age){
    this.firstName=firstName,
    this.LastName=LastName,
    this.Age=Age
}

createUser.prototype.getAgeYear=function (){
        return new Date().getFullYear()-this.age
}
const user1=new createUser("ayush","kumar",34);
const user2=new createUser("ayush2","kumar2",45);
