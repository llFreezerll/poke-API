import { LitElement, html, css } from '../node_modules/lit/index.js';
import { pokemonData } from '../data/pokemon.json';
import './detail.js';

class PokemonList extends LitElement {
  static styles = css`
  `;

  static properties = {
    pokemons: { type: Array },
    selectedPokemon: { type: Object }
  };

  constructor() {
    super();
    this.pokemons = pokemonData;
    this.selectedPokemon = null;
  }

  render() {
    return html`
      ${this.selectedPokemon ? this.renderDetail() : this.renderList()}
    `;
  }

  renderList() {
    return html`
      <ul>
        ${this.pokemons.map(pokemon => html`
          <li @click="${() => this.selectPokemon(pokemon)}">
            <img src="${pokemon.image}" alt="${pokemon.name}">
            <h2>${pokemon.name}</h2>
            <p>${pokemon.type}</p>
          </li>
        `)}
      </ul>
    `;
  }

  renderDetail() {
    return html`
      <component-detail .pokemon="${this.selectedPokemon}" @back="${this.clearSelection}"></component-detail>
    `;
  }

  selectPokemon(pokemon) {
    this.selectedPokemon = pokemon;
  }

  clearSelection() {
    this.selectedPokemon = null;
  }
}

customElements.define('pokemon-list', PokemonList);