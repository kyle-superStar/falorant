/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly WEBMENTION_API_KEY?: string;
	readonly WEBMENTION_URL?: string;
	readonly WEBMENTION_PINGBACK?: string;
}

// 为 astro-i18next 添加类型声明
declare module "astro-i18next" {
	export function localizePath(path: string, locale?: string): string;
	export function localizeUrl(url: URL, locale?: string): URL;
}

declare module "astro-i18next/components" {
	export const HeadHrefLangs: any;
}

declare module "@pagefind/default-ui" {
	class PagefindUI {
		constructor(arg: unknown);
	}
	export { PagefindUI };
}
