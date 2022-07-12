const TelegramBot = require('node-telegram-bot-api');

const TOKEN = '5594026350:AAHH8BVjOBON69yg0MAUAiM5SJEhVXI12qg';

const bot = new TelegramBot(TOKEN,{
   polling:true
});

// bot.on('message', (msg)=>{
//     const chatId = msg.chat.id;
//     if(msg.text % 2 == 0){
//         bot.sendMessage(chatId, 'парне');
//     }else{
//         bot.sendMessage(chatId, 'не парне');
//     }
//
// });

bot.on('message', (msg)=>{
    const chatId = msg.chat.id;

    if (msg.text === 'Рандомне число'){
        let random = Math.floor(Math.random() *100);
        bot.sendMessage(chatId, random);
    }else if (msg.text === 'Підкинь монетку'){
        if(coinFlip() == 0){
            bot.sendMessage(chatId,'решка');
        }else if (coinFlip() == 1){
            bot.sendMessage(chatId,'орел');
        }
    } else{
        bot.sendMessage(chatId, 'Hello' + msg.from.first_name,{
            reply_markup: {
                keyboard: [
                    ['Рандомне число', 'Підкинь монетку', 'Отримати контакти']
                ],
                resize_keyboard: true
            }
        })
    }



});
function coinFlip() {
    let res  = Math.floor(Math.random()*2);
    return res;
}

