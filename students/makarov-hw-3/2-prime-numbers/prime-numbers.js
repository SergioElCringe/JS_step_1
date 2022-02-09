function primeNumbers() {
    const arr = [];
    for (let i = 2; i <= 100; i++) {
        if (ifPrime(i)) arr.push(i);
    }

    function ifPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (!(num % i)) return false;
        }
        return num;
    };
    
    return arr;
};
