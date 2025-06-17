import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hello-world')
class HelloWorld extends LitElement {
    @property({ type: String }) name = 'Lit';

    static styles = css`
        :host {
            display: block;
            padding: 1rem;
            background: #fefefe;
            font-family: Arial, sans-serif;
        }
    `;

    render() {
        return html`<h1>Hello, ${this.name} + Webpack + Decorators!</h1>`;
    }
}
