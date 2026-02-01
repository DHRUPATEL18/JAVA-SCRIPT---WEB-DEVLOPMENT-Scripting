class user {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 4) {
            console.log('Name is too short');
            return;
        }
        this._name = value;
    }
}

let p = new user("Dhru")
console.log(p.name);

// p = new user("")
// p.name = "" // Name is too short

p.name = "patel"
console.log(p);

