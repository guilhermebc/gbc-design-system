import { newSpecPage } from '@stencil/core/testing';
import { GbcInput } from '../gbc-input';

describe('gbc-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GbcInput],
      html: `<gbc-input></gbc-input>`,
    });
    expect(page.root).toEqualHtml(`
      <gbc-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gbc-input>
    `);
  });
});
