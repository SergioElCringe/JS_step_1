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
    recursive: {
        name: 'olga2',
        age: 32,
    },
};
function recursive() {
    const olgaCl = {};
    for (let key in olga) {
        if (typeof olga[key] === 'object'){
            olgaCl[key] = {};
        }else{
            olgaCl[key] = olga[key];
        }
    };
    console.log(olgaCl);
    console.log(olga);
};
