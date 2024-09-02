import { LitElement, html, css } from '../node_modules/lit/index.js';

class ModalDialog extends LitElement {
  static styles = css`
  `;

  static properties = {
    message: { type: String }
  };

  render() {
    return html`
      <div class="modal">
        <p>${this.message}</p>
        <button @click="${this.closeModal}">Cerrar</button>
      </div>
    `;
  }

  closeModal() {
    this.remove();
  }
}

customElements.define('modal-dialog', ModalDialog);