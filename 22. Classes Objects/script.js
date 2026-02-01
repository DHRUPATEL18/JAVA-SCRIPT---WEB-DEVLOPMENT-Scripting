// let obj = {
//     a:1,
//     b:"dhru"
// }

// console.log(obj);

// let animal = {
//     eats:true
// };
// let rabbit = {  
//     jumps:true
// };

// rabbit.__proto__ = animal; // set rabbit.[[Prototype]] = animal

// console.log("rabbit jumps", rabbit.jumps); // true
// console.log("rabiit eats", rabbit.eats); // true

class animal{
    constructor(name){
        console.log('Object is created...');
        this.name = name;
    }

    eats(){
        console.log('Animal eats...');
    }
    jumps(){
        console.log('Animal jumps...');
    }
}

class lion extends animal{
    constructor(name){
        // super keyword is used to call the constructor of the parent class
        super(name); 
        console.log(`I am a ${name}`);
    }
    // Methods overrrding
    eats(){
        super.eats(); // calling the parent class method
        console.log(`${this.name} eat flash`);
    }
}

let a = new animal('Tiger');
console.log(a);

let b = new lion('Sher');
console.log(b);


// instanceof operator
console.log(b instanceof lion);     // true
console.log(b instanceof animal);   // true
console.log(a instanceof lion);     // false


// Static methods are methods that are called on the class itself, not on the class instances.
