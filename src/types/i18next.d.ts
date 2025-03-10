declare module 'i18next' {
  import { i18n } from 'i18next';
  export default i18n;
  export const t: (key: string, options?: any) => string;
  export const changeLanguage: (lng: string) => Promise<void>;
}

declare module 'i18next-browser-languagedetector' {
  import { LanguageDetectorModule } from 'i18next';
  const detector: LanguageDetectorModule;
  export default detector;
} 