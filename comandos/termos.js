// Function Termos de Uso ()



function Termos(ctx){
    //Variavel do Telegram

    const user = ctx.from.first_name || ctx.from.username || 'Usuario sem USER AND USERNAME'
    console.log(`${user}`)
    //Link dos termos de uso :

    //Text dos termos de uso ==>



    const text = ```

    Seja bem vindo ${user}


    Leia os termos de uso para usufruir da melhor forma possivel do nosso Bot

    Termos de Uso

    dawdadawdadawdawdawdawdadadawdadadawdadadaadadadadadadadadadadadadadadadadadada
    dadadadadadadaadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadadada
    dadadadadadadadadadadadadadadadadadadadadadadadadadadadadaadadadadadadadadadada
    dadadadadadadadadadadadadadadadadadadadadadadadadadadadaddddadadadadadadadadada



    ```
    console.log(text)
    ctx.reply(text)
}



module.exports = Termos;
