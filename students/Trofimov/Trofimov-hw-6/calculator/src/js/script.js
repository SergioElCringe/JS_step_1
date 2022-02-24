let input = document.querySelector('.input-value');
let power = "";

function insert(num) {
    if(input.textContent == 0) {
        input.textContent = "";
        input.textContent += num;
    } else {
        input.textContent += num;
    };
};

function clean() {
    input.textContent = "0";
    power = "";
};

function back() {
    let exp = input.textContent;
    input.textContent = exp.substring(0, exp.length - 1);
    if (input.textContent == 0) {
        input.textContent = "0";
    };
};

function equal() {
    let exp = input.textContent;
    if (input.textContent.includes('^')) {
        let tmp = input.textContent.split('^');
        let num = eval(power);
        let pow = +tmp[1];
        input.textContent = Math.pow(num,pow);
        power = "";
        return;
    };

    if (exp) {
        input.textContent = eval(exp);
    };
};

function percent() {
    input.textContent = eval(input.textContent) / 100;
};

function mathConstant(name) {
    if (input.textContent == 0) {
        input.textContent = "";
    };

    if (name == "pi") {
        input.textContent += Math.PI.toFixed(6);
    };

    if (name == "e") {
        input.textContent += Math.E.toFixed(6);
    };
};

function degreeOperations(degree) {
    if (degree == 'sqrt') {
        input.textContent = Math.sqrt(eval(input.textContent));
    };

    if (degree == '2') {
        input.textContent = Math.pow(eval(input.textContent), 2);
    };

    if (degree == '-1') {
        input.textContent = Math.pow(eval(input.textContent), -1);
    };

    if (degree == 'y') {
        power = input.textContent;
        input.textContent += "^";
    };
};

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
};

function fact() {
    input.textContent = factorial(+eval(input.textContent));
};

function log(name) {
    if (name == 'lg') {
        input.textContent = Math.log10(eval(input.textContent)).toFixed(6);
    };

    if (name == 'ln') {
        input.textContent = Math.log(eval(input.textContent)).toFixed(6);
    };
};

document.querySelector('.type').addEventListener('click', function() {
    if (document.querySelector('.type').textContent == "deg") {
        this.textContent = "rad";
    } else if (document.querySelector('.type').textContent == "rad") {
        this.textContent = "deg";
    };
});

function trigonomerty(name) {
    if (name == 'sin') {
        if (document.querySelector('.type').textContent == "deg") {
            input.textContent = parseFloat(Math.sin(eval(input.textContent) / 180 * Math.PI).toFixed(6).toString());
        } else {
            input.textContent = parseFloat(Math.sin(eval(input.textContent)).toFixed(6).toString());
        };
    };

    if (name == 'cos') {
        if (document.querySelector('.type').textContent == "deg") {
            input.textContent = parseFloat(Math.cos(eval(input.textContent) / 180 * Math.PI).toFixed(6).toString());
        } else {
            input.textContent = parseFloat(Math.cos(eval(input.textContent)).toFixed(6).toString());
        };
    };

    if (name == 'tg') {
        if (document.querySelector('.type').textContent == "deg") {
            input.textContent = parseFloat(Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(6).toString());
        } else {
            input.textContent = parseFloat(Math.tan(eval(input.textContent)).toFixed(6).toString());
        };
    };

    if (name == 'ctg') {
        if (document.querySelector('.type').textContent == "deg") {
            input.textContent = parseFloat(1/Math.tan(eval(input.textContent) / 180 * Math.PI).toFixed(6).toString());
        } else {
            input.textContent = parseFloat(1/Math.tan(eval(input.textContent)).toFixed(6).toString());
        };
    };
}