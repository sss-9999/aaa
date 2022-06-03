'use strict';
/**
 * ハンバーガーメニュー
 *
 * @param  {HTMLButtonElement} target  クリックする要素
 * @param  {HTMLElement}       panel   メニューとして展開させる要素
 */
 const hamburgerMenu = (target, panel) => {
  /* 引数で取得したセレクターがない場合は返却 */
  if (!target && !panel) {
    return;
  }

  /* 変数で渡ってきた要素でクリックイベントを実行 */
  target.addEventListener('click', () => {
      target.classList.toggle('active');
      panel.classList.toggle('navOn');
      panel.style.transition = "all 0.4s ease";
  });
};


/* ハンバーガーメニュー実装 */
const button = document.querySelector('.mbMenu');
const nav = document.querySelector('.header__nav');
hamburgerMenu(button, nav);
