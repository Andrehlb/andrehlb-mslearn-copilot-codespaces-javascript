const apiKey = 'My_API_KEY'

function googleTranslateElementint() {
    new googleTranslateElementint({
        pageLanguage: 'en',
        layout: google.translate.TranslateElement.InLineLayout,
        autoDisplay: false,
        method: 'post',
        element: document.getElementById('google_translate_element'),
        params: {
            key: apiKey,
            cb: function() {
                initLanguageList();
            }
        }
    });
} 