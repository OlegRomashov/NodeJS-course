const axios = require('axios');

const IAM_TOKEN = 't1.9euelZrPlprIl5iYzc-MiZuekpvGmO3rnpWalouZyorLlomTk42Yj5iTmcnl9PcKcksC-u9fSSqT3fT3SiBJAvrvX0kqkw.do4AC3dKfvAMoQ6NEQXHbIqgz_vWr4ud5oLDflN5sbNk2g38hIrVFZOQxG3t2OB0lCfglKvpC2zreVyjliYgCQ';
const FOLDER = 'b1gst5qpqhdq36hft3r7'

module.exports = function yandexTranslate(request) {
    return axios.post('https://translate.api.cloud.yandex.net/translate/v2/translate/', {
        "folder_id": FOLDER,
        ...request
    }, {
        headers: {
            'Content-Type': 'aaplication/json',
            'Authorization': 'Bearer ' + IAM_TOKEN
        }
    })
}