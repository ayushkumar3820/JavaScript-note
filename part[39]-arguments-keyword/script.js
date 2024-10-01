// const add1 = (...args) => {
//   let sum = 0
//   for (let i = 0; i < args.length; i++) {
//     sum = sum + args[i]
//   }
//   return sum
// }

const add3 = function () {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i]  // Adding each argument to the sum
    }
    return sum  // Returning the total sum
  }
  