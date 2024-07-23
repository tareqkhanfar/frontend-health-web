import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from './Language/English';
import Arabic from './Language/Arabic';

const resources = {
  en: {
    translation: English
  },
  ar: {
    translation: Arabic
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",  

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;