const readline = require ('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let i
let num1 = 0 , num2 = 0, max = [];

rl.question('Digite o primeiro numero\n', (num1) => {
    rl.question("Digite o segundo numero\n", (num2) => {
        max = Math.max(num1, num2)

        do{
            if(max % num1 == 0 && max % num2 == 0){
                console.log('O MMC é '+max);
            }
            max++
        }while(true);
        do{
            if (num1 % i == 0 && num2 % i ==0){
                console.log('O MDC é: '+i );
                break;
                }
                i++
                }while(true);
            })
        })
