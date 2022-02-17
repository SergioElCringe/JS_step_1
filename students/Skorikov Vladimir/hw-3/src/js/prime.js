function prime() {
  let simpleNumbers = [];
  let flag = true;

  for (let i = 2; i <= 100; i++) {
      for (let j = 2; j < i; j++) {
          if (!(i % j)) {
              flag = false;
          };
      };

      if (flag) {
        simpleNumbers.push(i);
      };

      flag = true;
  };

  console.log(simpleNumbers);
};