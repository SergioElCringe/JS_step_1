let olga = {
    name: "Olga",
    age: 35,
    sayHello() {
        console.log(`${this.name} приветсвует тебя!`)
    },
};

function makeClone(object) {
    let clone = {};
    for (let properties in object) {
        if (object.hasOwnProperty(properties)) {
            if ("object" === typeof object[properties]) {
                clone[properties] = makeClone(object[properties]);
            } else {
                clone[properties] = object[properties];
            }
        }
    };
    return clone;
}
