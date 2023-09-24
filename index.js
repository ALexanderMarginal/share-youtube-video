import 'dotenv/config';
import {getVideo, getVideoId} from './youTube.js';
import {publicToTelegram} from './telegram.js';
import {publicToTwitter} from './twitter.js';

/**
 * Get URL and additional text from arguments
 * @returns {{additionalText: string, url: string} | undefined}
 */
const getArgs = () => {
    if (process.argv.length === 2) {
        console.error('Expected at least one argument!');
        process.exit(1);
    }
    const args = process.argv.slice(2);
    const url = args.shift();
    const additionalText = args.join(' ');
    return {url, additionalText};
};

/**
 * Get message for social networks
 * @return {Promise<string>}
 */
const getMessage = async () => {
    const {url, additionalText} = getArgs();
    const videoId = getVideoId(url);
    const videoInfo = await getVideo(videoId);

    return [
        `${videoInfo?.title} ${additionalText}`,
        url,
        '\n',
        videoInfo.description,
    ].join('\n');
};

const start = async () => {
    const message = await getMessage();
    //console.log(publicToTelegram(message));
    console.log(publicToTwitter(message));
};

start();