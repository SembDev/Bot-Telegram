//Comando Start.js Para iniciar o bot e explicar os comandos para os usuarios
const fs = require('fs');
const path = require('path');



function Start(ctx){
    const id = ctx.from.id;
    const name = ctx.from.first_name || `${id} n tem first_name`;
    const username = ctx.from.username || `${id} n tem username`;
    //const hour =


    const filePATH = path.join(__dirname, `../Users_acess/${username}_${id}.txt`);

    //data salvar
    const data = `Usuário: ${name} | Username: ${username} | ID: ${id}\n`;


    fs.appendFile(filePATH, data, (error)=>{
        if(error){
            console.error('Erro ao salvar usuario', error);
        }
    })


    //HELP SEND Aqui

    const help = 'Comandos disponiveis : \n/seguir @nome_da_conta\n/comentar link_do_post\n/curtir link_do_post\n/sendDM @nome_da_conta\n\n Ao usar o nosso bot, o usuario declara que concorda com os /termos_de_uso\n'


    ctx.reply(help)









    console.log(
        `Usuário: ${name}\nUsername: ${username}\nID: ${id}`
    );






}

module.exports = Start;
