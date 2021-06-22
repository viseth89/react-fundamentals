class User {
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

let userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); // undefined
console.log(userOne.f); // Paul
console.log(userOne.l); // O'Connor
console.log(userOne); // User {f: "Paul", l: "O'Connor", email: "poconnor@elevenfifty.org" }

// // we name the class
// class User {
//     // we call the constructor function and create parameters
//     // these will be values that we want to be passed in and stored in the object
//     constructor(first, last, e) {
//         // on the right side of the below expressions, the word 'first', 'last', and 'e' are the values that are getting passed in as the arguements when the object is created
//         this.f = first;
//         this.l = last;
//         this.email = e;
//         // on the left side, we have have the actual keys of the object being created. The left side stores the incoming arguemnets from the newly created objects as the value for 'this' specific object being created
//     }
// }

class Car {
    constructor(make, model, engine) {
        this.make=make;
        this.model=model;
        this.engineSize=engine;
    }

}

let v = new Car("Toyota", "MR2", 4)
console.log(v)