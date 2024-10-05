// Example 1: Simple function `ayush` logs `this`
function ayush() {
    console.log(this);  // In a regular function, `this` refers to the global object (window in browsers).
}
ayush();  // Logs: window (global object in browsers)

// Example 2: Object method with `this` in `forEach`
const user = {
    FirstName: 'Ayush',
    LastName: 'Kumar',
    tags: ['A', 'B', 'C'],
    printTags() {
        this.tags.forEach(function(tag) {
            console.log(this);  // `this` here refers to the global object (not user object) in regular functions inside forEach
        }, this);  // Passing `this` as the second argument binds the `this` context to the object (user)
    }
};
user.printTags();  // Logs: user object 3 times, since `this` inside `forEach` now correctly refers to the `user` object

// Example 3: `this` in method `func`
const test = {
    props: 42,
    func: function() {
        return this.props;  // `this` refers to the test object, so `this.props` returns 42
    }
};
console.log(test.func());  // Logs: 42

// Example 4: Constructor Function `C` with `this`
function C() {
    this.a = 37;  // `this` refers to the instance created by the `new` keyword
}
let o = new C();  
console.log(o.a);  // Logs: 37 (new instance of C has property `a` set to 37)

// Example 5: Constructor Function `C2` returning an object
function C2() {
    this.a = 37;  // `this` refers to the instance
    return { a: 38 };  // Explicitly returns a different object, which overrides `this`
}
o = new C2();
console.log(o.a);  // Logs: 38 (because the function returned an object with `a: 38`)

// Example 6: `this` in ES6 Class
class C {
    instanceField = this;  // Refers to the instance of the class (the object created by new C())
    static staticField = this;  // Refers to the class itself, not an instance
}
const c = new C();
console.log(c.instanceField === c);  // true (instanceField is set to the instance itself)
console.log(C.staticField === C);  // true (staticField is set to the class itself)
