const readline = require ('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let num1 = 0
let num2 = 0

rl.question('Digite o primeiro numero\n', (num1) => {
    rl.question("Digite o segundo numero\n", (num2) => {
        let input = data.toString().trim()

        if(!num1) {
    
            num1 = input
        } else {
            num2 = input
    
            let i
            let maior
            let menor
    
            if(num1 > num2) {
                maior = num1
                menor = num2
            } else {
                maior = num2
                menor = num1
            }
    
            i = maior
            for (i; i <= num1 * num2; i += maior) {
                if(i % num1 == 0 && i % num2 == 0) {
                    console.log("MMC: " + i)
                    break;
                }
            }
    
            i = menor
    
            for(i; i > 0; i--) {
                if(num1 % i == 0 && num2 % i ==0) {
                    console.log("MDC: " + i)
                    break;
                }
            }
            process.exit();
        }
    })
})
