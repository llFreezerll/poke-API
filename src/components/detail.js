import { LitElement, html, css } from '../node_modules/lit/index.js';

class ComponentDetail extends LitElement {
  static styles = css`
  `;

  static properties = {
    pokemon: { type: Object }
  };

  render() {
    return html`
      <button @click="${this.goBack}">Volver</button>
      <h2>${this.pokemon.name}</h2>
      <img src="${this.pokemon.image}" alt="${this.pokemon.name}">
      <p>${this.pokemon.type}</p>
      ${this.pokemon.evolutions ? this.renderEvolutions() : ''}
    `;
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

customElements.define('component-detail', ComponentDetail);