const ua = navigator.userAgent || '';

/**
 * 获取 ios 大版本号
 */
export const getIOSVersion = (): number => {
  const version = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/) as string[];
  return Number.parseInt(version[1], 10);
};

/**
 * 获取 微信 版本号
 */
export const getWeChatVersion = (): string => {
  const version = navigator.appVersion.match(/micromessenger\/(\d+\.\d+\.\d+)/i) as string[];
  return version[1];
};

export const isAndroid = /android/i.test(ua);

export const isIos = /iphone|ipad|ipod/i.test(ua);

export const isWechat = /micromessenger\/([\d.]+)/i.test(ua);

export const isWeibo = /(weibo).*weibo__([\d.]+)/i.test(ua);

export const isQQ = /qq\/([\d.]+)/i.test(ua);

export const isQQBrowser = /(qqbrowser)\/([\d.]+)/i.test(ua);

export const isQzone = /qzone\/.*_qz_([\d.]+)/i.test(ua);

// 安卓 chrome 浏览器，很多 app 都是在 chrome 的 ua 上进行扩展的
export const isOriginalChrome = /chrome\/[\d.]+ mobile safari\/[\d.]+/i.test(ua) && isAndroid;

// chrome for ios 和 safari 的区别仅仅是将 Version/<VersionNum> 替换成了 CriOS/<ChromeRevision>
// ios 上很多 app 都包含 safari 标识，但它们都是以自己的 app 标识开头，而不是 Mozilla
export const isSafari =
  /safari\/([\d.]+)$/i.test(ua) && isIos && ua.includes('Crios') && ua.indexOf('Mozilla') === 0;
