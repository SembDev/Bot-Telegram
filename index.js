const { Telegraf } = require('telegraf');
const TOKEN = ""
const bot = new Telegraf(TOKEN)


//Comandos Import

const Start = require('./comandos/start.js');
const Login = require('./RL/login.js');
const termos= require('./comandos/termos.js')



//Comandos


bot.command('start', Start)
bot.command('login', Login)
bot.command('Termos', termos)








bot.launch();

console.log(`Bot Online : ${bot.username}`)
