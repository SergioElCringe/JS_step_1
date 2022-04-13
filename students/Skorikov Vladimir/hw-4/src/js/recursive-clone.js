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

function recursiveClone() {
  const olgaClone = {};
  for (let key in olga) {
      if (typeof olga[key] === 'object'){
          olgaCloje[key] = {};
      }else{
          olgaClone[key] = olga[key];
      }
  };
  console.log(olgaClone);
  console.log(olga);
};