import 'dotenv/config';
import {google} from 'googleapis';

const {authenticate} = require('@google-cloud/local-auth');

const youtube = google.youtube('v3');

const getVideo = async () => {
    const auth = await authenticate({
        keyfilePath: path.join(__dirname, './keyFile.json'),
        scopes: ['https://www.googleapis.com/auth/youtube'],
    });
    google.options({auth});

    const res = await youtube.search.list({
        part: 'id,snippet',
        q: 'Node.js on Google Cloud',
    });
    console.log(res.data);
};

function loadClient() {
    gapi.client.setApiKey('YOUR_API_KEY');
    return gapi.client.load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
        .then(function () {
                console.log('GAPI client loaded for API');
            },
            function (err) {
                console.error('Error loading GAPI client for API', err);
            });
}