let username = 'kumar'

const user = {
  firstName: 'Ayush',
  lastName: 'Singh',
  pata: {
    city: 'Bangalore',
    pinCode: 876876,
    state: 'up',
    moreDetails: {
      population: 9798897897,
      area: '787 sq km',
    },
  },
  age: 15,
  isGraduate: false,
}

// If an object cannot be deleted or have properties added or modified, then we use `Object.freeze()`.
Object.freeze(user)
// In the case of a sealed object, you cannot delete or add properties, but you can update existing ones.
//Object.seal(user);
delete user.firstName()
console.log('isGraduate' in user);
// The `in` keyword checks if a property exists in an object or not.
