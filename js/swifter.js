import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
import { OpenChecked } from '../teamplates/base-dropdown.js';
class Switch extends LitElement {
    static styles = css`
        :host {
            position: relative;
            display: inline-block; 
            --switch-width: 30px; 
            --switch-height: 17px; 
            --switch-bg-off: #ccc; 
            --switch-bg-on: var(--color-blue-80); 
            --switch-thumb-size: 13.5px; 
            
            padding: .25rem;
            font-family: "Inter", sans-serif
        }
        .switch {
            position: relative; 
            display: inline-block;
            width: var(--switch-width); 
            height: var(--switch-height);
        } 
        .switch {
            position: relative; 
            display: inline-block;
            width: var(--switch-width); 
            height: var(--switch-height); 
        }
        .switch input{
            opacity: 0; 
            width: 0; 
            height: 0;
        }
        
        .slider{
            position: absolute; 
            cursor: pointer; 
            inset: 0;
            background-color: var(--switch-bg-off);
            border-radius: var(--switch-height); 
            transition: .4s;
        } 
        .slider::before{
            position: absolute; 
            content: ""; 
            height: var(--switch-thumb-size); 
            width: var(--switch-thumb-size);
            left: 2px; 
            bottom: 2px; 
            background-color: hsl(220, 6%, 16.5%);
            border-radius: 50%;
            transition: .4s;
        } 
        input:checked + .slider{
            background-color: var(--switch-bg-on);
        }
        input:checked + .slider:before{
            transform: translateX(calc(var(--switch-width) - var(--switch-thumb-size) - 4px));
        }
        :host > span { 
            font-family: var(--font-family-text);
            vertical-align: -1px;        
        }
    `;
    render() {
        return html`
        <label class="switch">
            <input type="checkbox" @change=${this._toggle}>
            <span class="slider"></span>
        </label> 
        <span>Remember language</span>   
        `;
    }
}

customElements.define('mdn-switch', Switch);

class Button extends LitElement {
    static styles = css`
        :host{
            display: inline-flex;
            box-sizing: border-box;
        }
        .button{
            height: 22.2px; 
            width: 22.2px;
        }
        .button{
            display: flex;
            align-items: center;
            justify-content: center;
            cursor:pointer;
            border: 1px solid #0000;
            border-radius: .25rem; 
            padding: .2em; 
            margin: 0; 
        }
        .icon{
            color: var(--color-white); 
        }
        .icon svg{
            margin-top: 2px;
            padding-right: 1.3px;
            fill: none; 
            stroke-width: 2px; 
            stroke: currentcolor;
            stroke-linecap: round;
            stroke-linejoin: round;
            height: 1rem; 
            width: 1rem;
        }
        .button:hover{
            background-color: var(--color-border-primary);
        }
    `

    render() {
        return html`
            <a
            class="button"
            href="https://github.com/orgs/mdn/discussions/739"
            target="_blank"
            part="button"
            >
                <span class="icon" part="icon">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 16v-4m0-4h.01"></path>
                    </svg>
                </span>

                <span class="label" part="label">
                    <slot></slot>
                </span>
        </a>

        `
    }
}

customElements.define('mdn-button', Button);

class Swifter extends OpenChecked {
    _toggleMode(){
        this.toggleMenu();
    }
    
    static styles = css`
        .laungh-swifter {
            display: flex;
            justify-content: center;
            height: inherit;
            flex-wrap: nowrap;
            height: 103%;
        }

        .language-swifter__button {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            font-size: 16px;
            color: var(--color-white);
            background-color: transparent;
            gap: 5px;
            border: none;
            transition: var(--time-classic-anim);
        }

        .laungh-swifter .language-swifter__button:hover {
            background-color: var(--color-gray-40);
        }
        .language-switcher__dropdown{
            position: absolute; 
            background-color: var(--color-main-layout-dark-20);
            border: 1px solid var(--color-border-primary);
            padding: .45rem;
            margin: 0;
            right: -55px;
            width: max-content;
            z-index: -1; 
            transform: translate(-50%, 0%);
        }
        .language-switcher__ropdown.open{
            opacity: 1;
        }
        .language-switcher__dropdown.close{
            opacity: 0;
            display: none;
        }
        .language_switcher__remember{
            border-bottom: 1px solid var(--color-border-primary);
            display: flex; 
            font-size: var(--font-size-small); 
            width: 100%;
            place-items: center;
        }
        .language-switcher__list{
            list-style: none;
            margin: 0; 
            padding: 0;
            width: 100%;
        } 
        .language-switcher__option{
            display: flex;    
            column-gap: .25rem; 
            margin: 0; 
            text-decoration: none;
            color: var(--color-white);
            font-family: var(--font-family-text); 
            padding: .25rem;
            margin: 0;
            border: none;
        }
        .language-switcher__option:hover{
            background-color: hsl(0deg 0% 100% / 5%);
        }
    `
    render() {
        return html`
            <div class="laungh-swifter">
                <button type="button" class="language-swifter__button" @click=${()=>this._toggleMode()}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                            <path d="m5 8 6 6m-7 0 6-6 2-3M2 5h12M7 2h1m14 20-5-10-5 10m2-4h6" />
                        </svg>
                    </span>
                    <span>
                        Русский
                    </span>
                </button>
            </div>
            <div class="language-switcher__dropdown ${this.open ? 'open' : 'close'}">
                <div class="language_switcher__remember">
                    <mdn-switch></mdn-switch> 
                    <mdn-button></mdn-button>
                </div>
                <ul class="language-switcher__list">
                    <li>
                        <a class="language-switcher__option" href="#">
                            Deutsch
                        </a>
                    </li>
                    <li>
                        <a class="language-switcher__option" href="#">
                            English (US)
                        </a>
                    </li>
                    <li>
                        <a class="language-switcher__option" href="#">
                            Español
                        </a>
                    </li>
                    <li>
                        <a class="language-switcher__option" href="#">
                            Français
                        </a>
                    </li>
                    <li>
                        <a class="language-switcher__option" href="#">
                            日本語
                        </a>
                    </li>
                    <li>
                        <a class="language-switcher__option" href="#">
                            한국어
                        </a>
                    </li>
                    <li>
                        <a class="language-switcher__option" href="#">
                            Português (do Brasil)
                        </a>
                    </li>
                    <li>
                        <a class="language-switcher__option" href="#">
                            Русский
                        </a>
                    </li>
                    <li>
                        <a class="language-switcher__option" href="#">
                            中文 (简体)
                        </a>
                    </li>
                    <li>
                        <a class="language-switcher__option" href="#">
                            正體中文 (繁體)
                        </a>
                    </li>
                </ul>
            </div>
        `
    }
}
customElements.define('mdn-swifter', Swifter);