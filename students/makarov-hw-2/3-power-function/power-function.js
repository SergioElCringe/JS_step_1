function powerFunc(num, power){
    if(power === 1){
        return num;
    }
    return powerFunc(num, power - 1) * num;
}
