const axios = require('axios');

const IAM_TOKEN = 't1.9f7L7euelZqWi5nKisuWiZOTjZiPmJOZyeX09wMKWgL67y8hT_zd9PdDOFcC-u8vIU_8.PwUie73AJHkrpRoDtYyUiKD2m3lCZ2oi2B75TZaAFsXc9zOOoIPlRz3WsVEGipiZ_C5v__EoHS52_BMF5kzkCA';
const FOLDER = 'b1gst5qpqhdq36hft3r7'

axios.post('https://translate.api.cloud.yandex.net/translate/v2/translate/', {
    "folder_id": FOLDER,
    "texts": ["В этом примере показано, как перевести на русский язык две строки с текстом"],
    "targetLanguageCode": "en"
}, {
    headers: {
        'Content-Type': 'aaplication/json',
        'Authorization': 'Bearer ' + IAM_TOKEN
    }
}).then((res) => {
    console.log(res.data);
}).catch((err) => {
    console.log(err);
})