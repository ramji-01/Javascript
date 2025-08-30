/* What is a constructor in a JavaScript class?
The constructor is a special method inside a class.
It is called automatically when you create a new object (with new).
Its main use is to initialize the object’s properties. */

// # for private access modifier

class user
{
    #age;
    constructor(name, age)
    {
        this.name = name;
        this.#age = age;
    }
    get age(){
        return this.#age;
    }
    set age(num){
        this.#age=num;
    }
}

let user1 = new user("Ramji", "24");
user1.age = 12;
console.log(user1.age);