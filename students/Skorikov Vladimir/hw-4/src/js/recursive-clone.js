      const olga = {
        name: 'Olga',
        age: 32,
        sayHello() {
          console.log(`${ this.name } greets you!`);
        },
        getOlder() {
          this.age++;
        },
        changeName(name) {
          this.name = name;
        }
      };

      const cloneOlga = {};

      function recursiveClone() {
        for (let key in olga) {
          cloneOlga[key] = olga[key];
        };
      };