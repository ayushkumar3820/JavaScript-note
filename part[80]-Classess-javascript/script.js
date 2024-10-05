// Step 1: Define a class named 'createUser'
class createUser {
    
    // Step 2: The constructor is a special function that gets called when an object is created from the class.
    // It accepts parameters (FirstName, LastName, Age) and assigns them to the new object's properties using 'this'.
    constructor(FirstName, LastName, Age) {
        this.FirstName = FirstName;  // Assign the 'FirstName' parameter to the instance's 'FirstName' property
        this.LastName = LastName;    // Assign the 'LastName' parameter to the instance's 'LastName' property
        this.Age = Age;              // Assign the 'Age' parameter to the instance's 'Age' property
    }

    // Step 3: Define a method 'getAgeYear' to calculate the user's birth year
    // It uses the current year (from new Date().getFullYear()) minus the age of the user to estimate the birth year.
    getAgeYear() {
        return new Date().getFullYear() - this.Age;
    }

    // Step 4: Define another method 'getFullName' to return the user's full name.
    // It concatenates 'FirstName' and 'LastName' properties with a space in between.
    getFullName() {
        return this.FirstName + ' ' + this.LastName;
    }
}

// Step 5: Create instances of the 'createUser' class using the 'new' keyword.
// The constructor initializes each instance with the given arguments.
const user1 = new createUser("A", "b", 23);  // user1 has FirstName = "A", LastName = "b", Age = 23
const user2 = new createUser("A1", "B2", 24);  // user2 has FirstName = "A1", LastName = "B2", Age = 24

// Now 'user1' and 'user2' can access the methods 'getAgeYear' and 'getFullName':
// Example usage:
// user1.getFullName() will return "A b"
// user1.getAgeYear() will calculate the year based on age 23
