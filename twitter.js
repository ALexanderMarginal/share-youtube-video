import { TwitterApi } from 'twitter-api-v2';

// TODO  https://github.com/plhery/node-twitter-api-v2/blob/HEAD/doc/basics.md
const twitterClient = new TwitterApi(process.env.TWITTER_BEARER_TOKEN);

/**
 * Send message to twitter
 * @param {string} message
 * @returns {Promise<boolean>}
 */
export const publicToTwitter = async (message) => {
    try {
        const tweet = await twitterClient.v2.tweet(message)
        console.groupCollapsed('Twitter post')
        console.dir(tweet)
        console.groupEnd()
        return true;
    } catch (e) {
        console.groupCollapsed('Twitter error');
        console.log(e);
        console.groupEnd();
        return false;
    }
};