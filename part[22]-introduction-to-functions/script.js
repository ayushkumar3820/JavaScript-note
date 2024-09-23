// function Definition
function introduce(username,profession,age){
    // console.log(typeof username);// String 
    // console.log(typeof profession);// String
    // console.log(typeof age);//number

    console.log("hi");
    console.log(`my name is ${username || 'Ayush'} `)
    console.log(`I am a ${profession}`);
    console.log(`I am ${age} year Old `)
} 

 const returnValue = console.log(introduce('Ayush','software engineer',34));
 