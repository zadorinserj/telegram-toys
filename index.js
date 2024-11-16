require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// Вставьте токен, который вы получили от BotFather
const token = process.env.TG_API_TOKEN;

console.log(token, 'token');
// Создаём экземпляр бота
const bot = new TelegramBot(token, { polling: true });

// Обработчик команды /start
bot.onText(/\/start/, (msg) => {
    console.log(msg);
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет! Я ваш Telegram-бот.');
});

// Обработчик сообщений
bot.on('message', (msg) => {
    console.log(msg);
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `Вы отправили: "${msg.text}"`);
});
