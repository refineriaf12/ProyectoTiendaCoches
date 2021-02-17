'use strict';

const { Telegraf }  = require('telegraf');

const bot = new Telegraf('1632677545:AAGIjYbyEojqXyIR0GsmPxViOsthBG_f8e0');

// bot.start((ctx) => {
//     console.log(ctx);
//     ctx.reply('Bienvenido al Chat');

// })
bot.hears(['Hola', 'hola','ola' ], ctx => {
    ctx.reply('Bienvenido al chat online. Ha pasado a visitar antes nuestra seccion de FAQ´S?? Diga SI o NO')
})
    
bot.hears(['SI', 'Si', 'si'], ctx => {
    ctx.reply('Ok, entiendo que su problema no ha sido resuelto, continuemos a ver si podemos ayudarle, escriba LLAMAR, si quiere hablar con un agente');
});

bot.hears(['NO', 'No', 'no'], ctx => {
    ctx.reply('Disculpa antes de usar el chat, comprueba que tu problema es de sencilla solución en la sección de FAQ´s');
    ctx.leaveChat();
});

bot.hears(['LLAMAR', 'llamar', 'Llamar'], ctx => {
    ctx.reply('Gracias por usar nuestro chat, le pasamos con un agente. Buenas dias');
    ctx.leaveChat();
});

bot.launch();


