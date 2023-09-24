import {default as youtubeSearchApi} from 'youtube-search-api';

/**
 * Get video data from YouTube
 * @param {string} urlId
 * @returns {Promise<undefined|{isLive: boolean, channel: string, description: string, title: string}>}
 */
export const getVideo = async (urlId) => {
    try {
        const res = await youtubeSearchApi.GetVideoDetails(urlId);
        delete res.suggestion;
        return res;
    } catch (e) {
        console.groupCollapsed('Youtube error');
        console.log(e);
        console.groupEnd();
        return undefined;
    }
};

/**
 * Get video ID from YouTube URL
 * @param url
 * @returns {string}
 */
export const getVideoId = (url) => {
    return /v=[^&]*/.exec(url)[0].replace('v=', '');
};