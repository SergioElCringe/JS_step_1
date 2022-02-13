let i = 0;
let b = [];
function rand() {
    do {
        let c = Math.floor(Math.random() * 100 + 1);
        let flag = true;
        for (let i = 2; i < c; i++) {
            if (c % i == 0) {
                flag = false;
                break;
            };
        };
        if (flag === true) {
            b[i] = c;
            i++;
            console.log(b);
            return b;
        };
    } while (!b[i]);
};