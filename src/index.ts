import { Bot, webhookCallback } from "grammy";

export interface Env {
  BOT_TOKEN: string;
  BOT_DATA: KVNamespace;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    try {
      // Initialize the bot with the token from environment variables
      const bot = new Bot(env.BOT_TOKEN);

      // Set up basic bot commands
      bot.command("start", (ctx) => {
        ctx.reply(
          "Hello! I'm a Telegram bot running on Cloudflare Workers using grammY! 🤖\n\n" +
          "Available commands:\n" +
          "/start - Show this message\n" +
          "/ping - Ping the bot\n" +
          "/help - Show help information"
        );
      });

      bot.command("ping", (ctx) => {
        ctx.reply("Pong! 🏓");
      });

      bot.command("help", (ctx) => {
        ctx.reply(
          "This is a simple Telegram bot built with grammY and running on Cloudflare Workers.\n\n" +
          "Commands:\n" +
          "/start - Welcome message\n" +
          "/ping - Test if the bot is responsive\n" +
          "/help - This help message"
        );
      });

      // Handle any text message
      bot.on("message:text", (ctx) => {
        const text = ctx.message.text;
        ctx.reply(`You said: "${text}"`);
      });

      // Error handling
      bot.catch((err) => {
        console.error("Bot error:", err);
      });

      // Create webhook callback for Cloudflare Workers
      const handleUpdate = webhookCallback(bot, "cloudflare-mod");

      // Handle the request
      return await handleUpdate(request);
    } catch (error) {
      console.error("Worker error:", error);
      return new Response("Internal Server Error", { status: 500 });
    }
  },
};