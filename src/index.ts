import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('hello-world')
export class HelloWorld extends LitElement {
    @property({ type: String }) name = 'Lit';

    static styles = css`
        :host {
            display: block;
            padding: 1rem;
            background: #fefefe;
            font-family: Arial, sans-serif;
        }
        span {
            color: red;
        }
    `;

    private handleClick() {
        alert(`Hello, ${this.name}!`);
    }

    render() {
        return html` <p>Welcome to the Lit Element!</p>
            <h1>
                Hello,
                <span>${this.name}</span>
                + Webpack + Decorators!
            </h1>
            <button @click=${this.handleClick}>Click to have an alert</button>`;
    }
}
