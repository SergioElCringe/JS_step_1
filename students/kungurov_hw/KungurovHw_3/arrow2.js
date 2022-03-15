let peopleArr = [];
let i = 0;
function rand() {
    do {
        let rand = Math.floor(Math.random() * 100 + 1);
        let flag = true;
        for (let i = 2; i < rand; i++) {
            if (!(rand % i)) {
                flag = false;
                break;
            };
        };
        if (flag) {
            peopleArr.push(rand);
            i++;
            console.log(peopleArr);
            return peopleArr;
        };
    } while (!peopleArr[i]);
};