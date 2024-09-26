import { newSpecPage } from '@stencil/core/testing';
import { GbcButton } from '../gbc-button';

describe('gbc-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GbcButton],
      html: `<gbc-button></gbc-button>`,
    });
    expect(page.root).toEqualHtml(`
      <gbc-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gbc-button>
    `);
  });
});
