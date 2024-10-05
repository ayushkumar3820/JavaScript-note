class CreateUser {
    constructor(FirstName, lastName, Age) {
        this.FirstName = FirstName; // Assigns FirstName to the instance
        this.lastName = lastName;   // Assigns lastName to the instance
        this.Age = Age;             // Assigns Age to the instance
    }

    // Step 1: Instance Method (getBirthYear)
    // Calculates and returns the birth year of the user
    getBirthYear() {
        return new Date().getFullYear() - this.Age;  // Current year - age = birth year
    }

    // Step 2: Getter (getFullYear)
    // This is a getter, which allows you to retrieve the full name of the user in a custom format
    get getFullYear() {
        return `${this.FirstName} ${this.lastName}`;  // Combines FirstName and lastName with a space
    }

    // Step 3: Setter (FullName)
    // This is a setter that allows you to set the full name in one go, splitting it into first and last name
    set FullName(value) {
        const [firstName, lastName] = value.split(' '); // Assumes the value is a string like "John Doe"
        this.FirstName = firstName;  // Sets the FirstName property
        this.lastName = lastName;    // Sets the lastName property
    }
}

// Step 4: Create instances of CreateUser
const user = new CreateUser('A', 'b', 34);
const user2 = new CreateUser('B', 'C', 36);

// Example of using the getter method
console.log(user.getFullYear); // Outputs: 'A b'

// Example of using the setter method
user.FullName = 'John Doe';  // Sets the FirstName to 'John' and lastName to 'Doe'
console.log(user.FirstName);  // Outputs: 'John'
console.log(user.lastName);   // Outputs: 'Doe'
