function consoleResult(result) {
    console.log(result);
};

function makeOperation(operation) {
    if (operation === 1 || operation === 2 || operation === 3) {
        let computer = Math.floor(Math.random() * 3) + 1;
        let result;

        switch(operation) {

            case 1: {
                if (computer === 1) {
                    result = 'You (Rock) vs Computer (Rock) = Draw!'
                }

                else if (computer === 2) {
                    result = 'You (Rock) vs Computer (Scissors) = You win!'
                }

                else {
                    result = 'You (Rock) vs Computer (Paper) = You lose :('   
                };
                break;
                
            };
            case 2: {
                if (computer === 1) {
                    result = 'You (Scissors) vs Computer (Rock) = You lose :('
                }

                else if (computer === 2) {
                    result = 'You (Scissors) vs Computer (Scissors) = Draw!'
                }

                else {
                    result = 'You (Scissors) vs Computer (Paper) = You win!'    
                };
                break; 
            };
            case 3: {
                if (computer === 1) {
                    result = 'You (Paper) vs Computer (ROCK) = You win!'
                }

                else if (computer === 2) {
                    result = 'You (Paper) vs Computer (Scissors) = You lose :('
                }

                else {
                    result = 'You (Paper) vs Computer (Paper) = Draw!'
                };
                break;    
            };    
        };

    consoleResult(result);
        
    }

    else {
        console.log('Выберите один из 3 вариантов!')
    };
};
