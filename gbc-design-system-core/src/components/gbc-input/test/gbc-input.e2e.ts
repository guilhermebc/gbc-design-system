import { newE2EPage } from '@stencil/core/testing';

describe('gbc-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gbc-input></gbc-input>');

    const element = await page.find('gbc-input');
    expect(element).toHaveClass('hydrated');
  });
});
