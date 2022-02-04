function powerFunc(num, power){
    if(power === 0){
        return 1;
    }
    if(power === 1){
        return num;
    }
    return powerFunc(num, power - 1) * num;
}
