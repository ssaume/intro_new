'use strict';
try {
  const url = new URL(window.CONTACT_GUIDE.gasUrl);
  if (url.origin !== 'https://script.google.com' || !/^\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(url.pathname) || url.search || url.hash) throw new Error('網址格式錯誤');
  const button = document.getElementById('launch');
  button.href = url.href; button.target = '_blank'; button.rel = 'noopener noreferrer';
  button.removeAttribute('aria-disabled'); button.textContent = '開始找窗口 ↗';
  document.getElementById('note').textContent = '直接開始引導，不需登入或驗證公司網域。';
} catch (error) { /* Fail closed: the unconfigured portal has no external link. */ }
