//Global Scope
const username = 'Ayush'
let userAge = 25
var a = 50// This variable always represents the global scope in anywhere are we use .

function add() {
    //Local scope 
  debugger
  const username = 'Ayush23'
  const x = 5
  const y = 8
  console.log(x + y)//13
  console.log(username)//print = Ayush23 na ke  ayush
  }

function subtract() {
  const x = 15
  const y = 18
  console.log(x - y)//-3
  console.log(username)//Ayush 
}

add()
subtract()

console.log('Program Ended')