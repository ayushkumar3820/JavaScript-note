class createUser {
    constructor(FirstName, LastName, Age) {
        this.FirstName = FirstName;  // Assigned to instance
        this.LastName = LastName;    // Assigned to instance
        this.Age = Age;              // Assigned to instance
    }

    // Step 1: Static property 'hi'
    static hi = "ayush";   // This belongs to the class, not instances

    // Step 2: Static block for initializing static members and logging the class
    static {
        console.log(this); // Logs the class itself (createUser), not an instance
        
        // Modifying the static property
        this.hi = 'hiello';   // Changing static property 'hi' to 'hiello'

        // Step 3: Adding a static method dynamically inside the static block
        this.getFullName = function() {
            // This will not work for instances as 'this.FirstName' does not exist in the class itself
            return this.FirstName + ' ' + this.LastName;
        }
    }

    // Step 4: Instance method 'getBirthYear'
    getBirthYear() {
        return new Date().getFullYear() - this.Age;
    }
}

// Step 5: Static methods and properties are accessed directly from the class
console.log(createUser.hi); // Outputs: 'hiello'

// The 'getFullName' method is now a static method, but won't work as 'this.FirstName' is undefined at the class level
console.log(createUser.getFullName());  // This will throw an error as FirstName and LastName are instance properties
