import { LitElement, html, css } from 'lit-element';

class PokemonDetail extends LitElement {
  static get properties() {
    return {
      pokemon: { type: Object }
    };
  }

  static get styles() {
    return css`
    `;
  }

  render() {
    return html`
      <div>
        <button @click="${this.goBack}">Volver</button>
        <button @click="${this.editPokemon}">Editar</button>
        <h2>${this.pokemon.name}</h2>
        <img src="${this.pokemon.image}" alt="${this.pokemon.name}">
        <div>Tipo: ${this.pokemon.type}</div>
        ${this.pokemon.evolutions ? html`
          <h3>Evoluciones</h3>
          <ul>
            ${this.pokemon.evolutions.map(evolution => html`
              <li>
                <img src="${evolution.image}" alt="${evolution.name}">
                <div>${evolution.name}</div>
                <div>${evolution.type}</div>
              </li>
            `)}
          </ul>
        ` : ''}
      </div>
    `;
  }

  goBack() {
    this.dispatchEvent(new CustomEvent('back'));
  }

  editPokemon() {
    this.dispatchEvent(new CustomEvent('edit', { detail: this.pokemon }));
  }
}

customElements.define('pokemon-detail', PokemonDetail);