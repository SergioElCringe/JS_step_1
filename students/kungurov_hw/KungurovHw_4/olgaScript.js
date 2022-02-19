const olga = {
    name: 'Olga',
    age: 32,
    sayHello() {
        console.log(`${this.name} greets you!`);
    },
    getOlder() {
        this.age++;
    },
    changeName(name) {
        this.name = name;
    },
};
function recursive() {
    const olgaCl = {};
    for (let key in olga) {
        olgaCl[key] = olga[key];
    };
    console.log(olgaCl);
};