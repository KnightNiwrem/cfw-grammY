# cfw-grammY

A Telegram bot running on Cloudflare Workers using the grammY library.

## Features

- ✨ Built with [grammY](https://grammy.dev/) - The Telegram Bot Framework
- 🚀 Deployed on [Cloudflare Workers](https://workers.cloudflare.com/) for edge computing
- 📦 TypeScript support with proper type definitions
- 🔧 Easy configuration with Wrangler

## Getting Started

### Prerequisites

- Node.js 18+ 
- A Telegram Bot Token (get one from [@BotFather](https://t.me/BotFather))
- A Cloudflare account

### Installation

1. Clone this repository:
```bash
git clone https://github.com/KnightNiwrem/cfw-grammY.git
cd cfw-grammY
```

2. Install dependencies:
```bash
npm install
```

3. Configure your bot:
   - Set your bot token as a secret in Cloudflare Workers:
   ```bash
   npx wrangler secret put BOT_TOKEN
   ```
   - Or add it to your `wrangler.toml` file (not recommended for production)

### Development

Run the development server:
```bash
npm run dev
```

### Deployment

Deploy to Cloudflare Workers:
```bash
npm run deploy
```

### Setting up the Webhook

After deployment, set up the webhook for your bot:
```bash
curl -X POST "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook" \
     -H "Content-Type: application/json" \
     -d '{"url": "https://your-worker.your-subdomain.workers.dev"}'
```

## Bot Commands

- `/start` - Welcome message and available commands
- `/ping` - Test if the bot is responsive  
- `/help` - Show help information

The bot also echoes back any text messages sent to it.

## Project Structure

```
├── src/
│   └── index.ts          # Main worker entry point
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── wrangler.toml         # Cloudflare Workers configuration
└── README.md            # This file
```

## License

MIT License - see [LICENSE](LICENSE) file for details.