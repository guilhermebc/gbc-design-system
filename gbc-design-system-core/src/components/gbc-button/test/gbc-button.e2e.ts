import { newE2EPage } from '@stencil/core/testing';

describe('gbc-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gbc-button></gbc-button>');

    const element = await page.find('gbc-button');
    expect(element).toHaveClass('hydrated');
  });
});
