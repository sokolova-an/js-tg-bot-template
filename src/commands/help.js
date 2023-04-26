const helpMessage = `Here are some ways I can help you:

<b>Commands</b>
/start - Start the bot 
/about - Display information about the bot`;

module.exports = function (bot) {
  bot.api.sendMessage(bot.chat.id, helpMessage, {
    parse_mode: "HTML",
  });
};
