import { fixture, html, expect } from '@open-wc/testing';
import './hello-world.js'; // Import your component

describe('hello-world', () => {
    it('renders default name', async () => {
        const el = await fixture(html`<hello-world></hello-world>`);
        expect(el.shadowRoot?.textContent).to.include('Hello, Lit + Webpack!');
    });

    it('updates name property', async () => {
        const el = await fixture(html`<hello-world name="Test"></hello-world>`);
        expect(el.shadowRoot?.textContent).to.include('Hello, Test!');
    });
});
