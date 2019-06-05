import { newE2EPage } from '@stencil/core/testing';

describe('my-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component></my-component>');
    const element = await page.find('my-component');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<my-component name="Test" repeat="2"></my-component>');
    const component = await page.find('my-component');
    const element = await page.find('my-component >>> p');
    expect(element.textContent).toEqual(`Hello, World! I'm Test Test`);

    component.setProperty('repeat', '3');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm Test Test Test`);
  });
});
