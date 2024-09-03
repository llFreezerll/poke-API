import { LitElement, html, css } from 'lit-element';
import pokemonData from '../data/pokemon-data.json';

class PokemonList extends LitElement {
  static get styles() {
    return css`
    `;
  }

  render() {
    return html`
      <ul>
        ${pokemonData.map(pokemon => html`
          <li @click="${() => this.selectPokemon(pokemon)}">
            <img src="${pokemon.image}" alt="${pokemon.name}">
            <div>${pokemon.name}</div>
            <div>${pokemon.type}</div>
          </li>
        `)}
      </ul>
    `;
  }

  selectPokemon(pokemon) {
    this.dispatchEvent(new CustomEvent('select', { detail: pokemon }));
  }
}

customElements.define('pokemon-list', PokemonList);