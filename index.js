const readline = require ('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let num1 = 0 , num2 = 0, max = [];

rl.question('Digite o primeiro numero\n', (num1) => {
    rl.question("Digite o segundo numero\n", (num2) => {
        max = Math.max(num1, num2)

        do{
            if(max % num1 == 0 && max % num2 == 0){
                console.log('O MMC é '+max);
                break;
            }
            max++
        }while(true)



        rl.close()
    })
})