import { LitElement, html } from './lit-element.js';
import './pokemon-list.js';
import './pokemon-detail.js';
import './pokemon-edit.js';

class PokemonApp extends LitElement {
  static get properties() {
    return {
      selectedPokemon: { type: Object },
      editingPokemon: { type: Object }
    };
  }

  constructor() {
    super();
    this.selectedPokemon = null;
    this.editingPokemon = null;
  }

  render() {
    return html`
      ${this.selectedPokemon ? html`
        <pokemon-detail .pokemon="${this.selectedPokemon}" @back="${this.handleBack}" @edit="${this.handleEdit}"></pokemon-detail>
      ` : html`
        <pokemon-list @select="${this.handleSelect}"></pokemon-list>
      `}
      ${this.editingPokemon ? html`
        <pokemon-edit .pokemon="${this.editingPokemon}" @close="${this.handleCloseEdit}"></pokemon-edit>
      ` : ''}
    `;
  }

  handleSelect(event) {
    this.selectedPokemon = event.detail;
  }

  handleBack() {
    this.selectedPokemon = null;
  }

  handleEdit(event) {
    this.editingPokemon = event.detail;
  }

  handleCloseEdit() {
    this.editingPokemon = null;
  }
}

customElements.define('pokemon-app', PokemonApp);