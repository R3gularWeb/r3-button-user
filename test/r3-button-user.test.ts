import { html, fixture, expect } from '@open-wc/testing';

import { R3ButtonUser } from '../src/R3ButtonUser.js';
import '../r3-button-user.js';

describe('R3ButtonUser', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<R3ButtonUser>(html`<r3-button-user></r3-button-user>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<R3ButtonUser>(html`<r3-button-user></r3-button-user>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<R3ButtonUser>(html`<r3-button-user title="attribute title"></r3-button-user>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<R3ButtonUser>(html`<r3-button-user></r3-button-user>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
