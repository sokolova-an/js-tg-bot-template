// Import dependencies
const { Bot } = require("grammy");
// Load environment variables
require("dotenv").config();

// Create a new Telegram Bot API client
const bot = new Bot(process.env.BOT_TOKEN); // <-- put your bot token from here (https://t.me/BotFather)

// Load commands from the commands folder
const startCommand = require('./commands/start');
const helpCommand = require('./commands/help');

// Handle commands
bot.command('start', startCommand);
bot.command('help', helpCommand);

// Handle incoming messages
bot.on("message", (msg) => {
  msg.reply("Got another message!")
  console.log(msg);
});

// Log when bot has started
console.log("Bot started...");

bot.start();