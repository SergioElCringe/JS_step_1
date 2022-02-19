function checkPrime(num) {
    for (let i = 2, max = Math.sqrt(num) ; i <= max; i++) {
        if (num % i === 0) {
            return false;
        };
    };
    return num > 1;
}

function getPrimes(num) {
    const primes = [];

    for (let i = 2; i <= num; i++) {
        if (checkPrime(i)) {
            primes.push(i);
        };
    };
    return primes;
};

function resultArr() {
    return console.log(getPrimes(100));
};