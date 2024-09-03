import { LitElement, html, css } from 'lit-element';

class PokemonEdit extends LitElement {
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
        <h2>Editar Pokémon</h2>
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
            <input type="checkbox" @change="${this.handleRepeated}">
          </label>
          <button type="button" @click="${this.closeEdit}">Cerrar</button>
        </form>
      </div>
    `;
  }

  handleRepeated(event) {
    if (event.target.checked) {
      alert('Puede cambiarlo en el punto más cercano.');
    }
  }

  closeEdit() {
    this.dispatchEvent(new CustomEvent('close'));
  }
}

customElements.define('pokemon-edit', PokemonEdit);