const startMessage = `Hello! I'm a Telegram bot.

<b>Commands</b>
/help - Start the bot 
/about - Display information about the bot`;

module.exports = (bot) => {
  bot.api.sendMessage(bot.chat.id, startMessage, {
    parse_mode: "HTML",
  });
};
