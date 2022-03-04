function plus() {
    var a = Number(prompt('Введите первое число'));
    var b = Number(prompt('Введите второе чило'));
    console.log(a + b);
};
function minus() {
    var a = Number(prompt('Введите первое число'));
    var b = Number(prompt('Введите второе чило'));
    console.log(a - b);
};
function division() {
    var a = Number(prompt('Введите первое число'));
    var b = Number(prompt('Введите второе чило'));
    if (b==0){
        console.log('На ноль делить нельзя');
    }else{
    console.log(a / b);
    }
};
function multiply() {
    var a = Number(prompt('Введите первое число'));
    var b = Number(prompt('Введите второе чило'));
    console.log(a * b);
}; 