import { LitElement } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class OpenChecked extends LitElement {
  static properties = {
    open: { type: Boolean }
  };

  constructor() {
    super();
    this.open = false;

    this._onUiOpen = (e) => {
      if (e.detail?.source !== this) {
        this.open = false;
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('ui-open', this._onUiOpen);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('ui-open', this._onUiOpen);
  }

  openMenu() {
    this.open = true;

    window.dispatchEvent(new CustomEvent('ui-open', {
      detail: { source: this },
      bubbles: true,
      composed: true
    }));
  }

  toggleMenu() {
    if (this.open) {
      this.open = false;
    } else {
      this.openMenu();
    }
  }
}
