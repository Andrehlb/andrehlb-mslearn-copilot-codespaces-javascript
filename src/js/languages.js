const languages = {
    'en': 'English',
    'pt': 'Portuguese',
    'es': 'Spanish',
    'fr': 'Franch',
    'it': 'Italian',
    'ko': 'Korea',
    'th': 'Thai',
    'ru': 'Russian',
    'ja': 'Japanese',
    'zh-cn': 'Chinese (Mandarin)',
    'zh-nk': 'Chinese (Cantonese)',
    'zh-tw': 'Chinese (Traditional)'
}

const languageCodes = Object.keys(languages);

function initLanguageList() {
    languageCodes.forEach(code => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = languages[code];
        langagueList.appendChild(option);
    });
}