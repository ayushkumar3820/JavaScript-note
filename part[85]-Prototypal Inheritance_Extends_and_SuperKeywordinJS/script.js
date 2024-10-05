class person{
    live(){
        console.log('living');
    }
}

class User extends person{
    constructor(firstName,LastName,Age){
        super()
        this.firstName=firstName
        this.LastName=LastName
        this.Age=Age
    }


    getBirthYear(){
        return new Date.getFullYear()-this.Age;
    }

    work(){
        console.log('working ')
    }

    get FullName(){
        return `${this.firsName}${this.LastName}`;
    }

    set FullName(value){
const [firsName,LastName,Age]=value.split();  
   this.firstName=FIrsName;
   this.LastName=LastName;


 }


}

// const user1=new createUser('A','b',45);
// const user2=new createUser('B','b',36);

class Student extends User {
    constructor(firstName, lastName, age, standard) {
      super(firstName, lastName, age)
      this.standard = standard
    }
    study() {
      console.log('studying');
    }
  }


  class Employee extends User {
    constructor(firstName, lastName, age, company) {
      super(firstName, lastName, age)
      this.company = company
    }
    work() {
      console.log('Working');
    }
  }
  
  const student1 = new Student('Aman', 'Mishra', 32, 'BCA')
  const employee1 = new Employee('Anurag', 'Singh', 72, 'Google')