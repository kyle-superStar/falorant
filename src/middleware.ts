import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async ({ url, locals, redirect }, next) => {
  const pathname = url.pathname;
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  
  // 检查是否是支持的语言
  const supportedLanguages = ['zh'];
  const isLanguagePrefix = supportedLanguages.includes(firstSegment);
  
  // 如果没有语言前缀，默认为英文
  const currentLang = isLanguagePrefix ? firstSegment : 'en';
  
  // 将语言信息存储在 locals 中，以便在组件中使用
  locals.lang = currentLang;
  
  // 继续处理请求
  const response = await next();
  return response;
}); 