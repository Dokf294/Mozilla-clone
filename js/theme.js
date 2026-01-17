import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import { OpenChecked } from '../teamplates/base-dropdown.js';

class Theme extends OpenChecked {
  _togglemode() {
    this.toggleMenu()
  }
  _setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }
  _applySystemTheme(e) {
    const isDark = e
      ? e.matches
      : window.matchMedia('(prefers-color-scheme: dark)').matches;

    document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  }
  _setSystemTheme() {
    localStorage.setItem('theme', 'system');
    this._applySystemTheme();
  }
  connectedCallback() {
    super.connectedCallback();

    this._media = window.matchMedia('(prefers-color-scheme: dark)');

    const getTheme = localStorage.getItem('theme');
    if (getTheme === 'light' || getTheme === 'dark') {
      this._setTheme(getTheme);
    } else {
      this._setSystemTheme();
      this._listener = (e) => this._applySystemTheme(e);
      this._media.addEventListener('change', this._listener);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._media?.removeEventListener('change', this._listener);
  }



  static styles = css`
    .color-theme {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 103%;
    }

    .color-theme__button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      background: transparent;
      border: none;
      color: var(--color-white);
      font-family: var(--font-family-text);
      font-size: 16px;
      height: 100%;
      cursor: pointer;
      transition: .3s;
    }

    .color-theme__button:hover {
      background-color: var(--color-gray-40);
    }

    .color-theme__dropdown{
      position: absolute; 
      padding: .75rem;
      right: 0;
      top: 100%;
      z-index: -1;
      border: 1px solid var(--color-border-primary);
    } 
    .color-theme__dropdown{
      background-color: var(--color-main-layout-dark-20);
      margin: 0; 
      width: max-content; 
    }
    .color-theme__list{
      padding:0;
      margin: 0;
      list-style: none;
      text-wrap: nowrap;
      }
    .color-theme__option{
      display: flex;
      place-items: center;
      justify-content: start;
      gap: 5px;
      background: transparent;
      border: medium;
      color: var(--color-white);
      font-family: var(--font-family-text);
      font-size: 16px;
      width:100%;
      
      height:2rem;
      cursor: pointer;
      transition: 0.3s;
    }
    .color-theme__option:hover{
      background-color: var(--color-border-primary);
    }
    li:nth-child(1) .color-theme__option:before {
      content: "";
      display: block; 
      background-color: currentColor;
      mask-image: url('../js/theme/systemDefault.svg');
      height: 1.35rem;
      width: 1.30rem;
      mask-size: cover;
      -webkit-mask-size: cover; 
    }
    li:nth-child(2) .color-theme__option:before {
      content: "";
      display: block; 
      background-color: currentColor;
      mask-image: url("../js/theme/light.svg");
      height: 1.35rem;
      width: 1.30rem;
      mask-size: cover;
      -webkit-mask-size: cover;
      
    }
    li:nth-child(3) .color-theme__option:before {
      content: "";
      display: block; 
      background-color: currentColor;
      mask-image: url('../js/theme/dark.svg');
      height: 1.35rem;
      width: 1.30rem;
      mask-size: cover;
      -webkit-mask-size: cover;
      
    }
    .color-theme__dropdown.close{
      opacity: 0;
      display: none;
    } 
    .color-theme__dropdown.open{
      opacity: 1;
    }  
  `;

  render() {
    return html`
      <div class="color-theme">
        <button class="color-theme__button" type="button" @click=${() => this._togglemode()}>
          <span>Theme</span>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round"
              viewBox="0 0 24 24">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"/>
            </svg>
          </span>
        </button>

        <div class="color-theme__dropdown ${this.open ? 'open' : 'close'}">
          <ul class="color-theme__list">
            <li><button class="color-theme__option" @click=${() => this._setSystemTheme()}>OS default</button></li>
            <li><button class="color-theme__option" @click=${() => this._setTheme('light')}>Light</button></li>
            <li><button class="color-theme__option" @click=${() => this._setTheme('dark')}>Dark</button></li>
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define('mdn-theme', Theme);



