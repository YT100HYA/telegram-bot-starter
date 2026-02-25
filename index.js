require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");

if (!process.env.BOT_TOKEN) {
  console.error("❌ BOT_TOKEN is missing in .env file");
  process.exit(1);
}

const bot = new TelegramBot(process.env.BOT_TOKEN, {
  polling: true
});

console.log("🤖 Telegram Bot is running...");

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "👋 Hello! Welcome to Telegram Bot Starter.\n\nBuilt by Devesh Sharma 🚀"
  );
});

bot.onText(/\/help/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "📖 Available Commands:\n\n/start - Start the bot\n/help - Show help menu"
  );
});

bot.on("message", (msg) => {
  if (msg.text && !msg.text.startsWith("/")) {
    bot.sendMessage(
      msg.chat.id,
      "You said: " + msg.text
    );
  }
});
