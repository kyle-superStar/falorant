import i18next from 'i18next';
import Backend from 'i18next-http-backend';

i18next
  .use(Backend)
  .init({
    debug: true,
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh'],
    defaultNS: 'translation',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18next;

// 语言切换函数
export async function changeLanguage(lang: string) {
  await i18next.changeLanguage(lang);
  document.documentElement.lang = lang;
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem('preferred-lang', lang);
}

// 简单的翻译函数
export const t = (key: string) => {
  return i18next.t(key);
}; 