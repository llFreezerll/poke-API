import { LitElement, html, css } from '../node_modules/lit/index.js';

class PokemonEdit extends LitElement {
  static styles = css`
  `;

  static properties = {
    pokemon: { type: Object }
  };

  render() {
    return html`
      <form>
        <label>
          Nombre:
          <input type="text" .value="${this.pokemon.name}">
        </label>
        <label>
          Tipo:
          <input type="text" .value="${this.pokemon.type}">
        </label>
        <label>
          Imagen:
          <input type="text" .value="${this.pokemon.image}">
        </label>
        <label>
          Repetido:
          <input type="checkbox" @change="${this.checkRepeated}">
        </label>
        <button type="button" @click="${this.saveChanges}">Guardar</button>
      </form>
      <button @click="${this.goBack}">Volver</button>
      <h2>${this.pokemon.name}</h2>
      <img src="${this.pokemon.image}" alt="${this.pokemon.name}">
      <p>${this.pokemon.type}</p>
      ${this.pokemon.evolutions ? this.renderEvolutions() : ''}
    `;
  }

  checkRepeated(event) {
    if (event.target.checked) {
      this.showModal();
    }
  }

  showModal() {
    const modal = document.createElement('modal-dialog');
    modal.message = 'Puede cambiarlo en el punto más cercano.';
    document.body.appendChild(modal);
  }

  saveChanges() {
    const form = this.shadowRoot.querySelector('form');
    const inputs = form.querySelectorAll('input');
    this.pokemon.name = inputs[0].value;
    this.pokemon.type = inputs[1].value;
    this.pokemon.image = inputs[2].value;
  }

  renderEvolutions() {
    return html`
      <h3>Evoluciones</h3>
      <ul>
        ${this.pokemon.evolutions.map(evolution => html`
          <li>
            <img src="${evolution.image}" alt="${evolution.name}">
            <h4>${evolution.name}</h4>
            <p>${evolution.type}</p>
          </li>
        `)}
      </ul>
    `;
  }

  goBack() {
    this.dispatchEvent(new CustomEvent('back'));
  }
}

customElements.define('pokemon-edit', PokemonEdit);