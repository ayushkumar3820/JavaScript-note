class createUser{
    #age
    constructor(FirstName,LastName,Age){
        this.FirstName=FirstName
        this.LastName=LastName
        this.Age=Age
    }
    #hi="ayush kumar"

    getBirthYear(){
        console.log(this.#hi)
        console.log(this.#getFullName())
        return new Date().getFullYear()-this.#age
    }

    #getFullName(){
        return this.firstName+''+this.LastName
    }
}

const user1=new createUser('A','b',45);
const user2=new createUser('b',"c",36);