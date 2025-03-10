import i18n from './config';

// 检查是否在浏览器环境中
const isBrowser = typeof window !== 'undefined';

// 异步加载翻译文件
export const loadTranslations = async (lang: string) => {
  if (!isBrowser) return false;
  
  try {
    // 如果已经加载过这个语言的翻译，就不需要再次加载
    if (i18n.hasResourceBundle(lang, 'translation')) {
      return true;
    }

    // 动态加载翻译JSON文件
    const translations = await fetch(`/locales/${lang}/translation.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load translations for ${lang}`);
        }
        return response.json();
      });
    
    // 将加载的翻译添加到i18n实例
    i18n.addResourceBundle(lang, 'translation', translations, true, true);
    
    return true;
  } catch (error) {
    console.error(`Error loading translations for ${lang}:`, error);
    return false;
  }
};

// 初始化语言
export const initializeLanguage = async () => {
  if (!isBrowser) return 'en';
  
  // 让i18next自动检测语言
  const detectedLang = i18n.language;
  
  // 加载检测到的语言的翻译
  if (detectedLang === 'zh' || detectedLang.startsWith('zh-')) {
    await loadTranslations('zh');
    return 'zh';
  }
  
  // 默认加载英文
  await loadTranslations('en');
  return 'en';
}; 