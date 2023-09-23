import TelegramBot from 'node-telegram-bot-api'

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, {polling: false});

/**
 * Send message to telegram
 * @param {string} message
 * @returns {Promise<boolean>}
 */
export const publicToTelegram = async (message) => {
    try {
        await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message);
        return true
    } catch (e) {
        console.log(e);
        return false
    }
}