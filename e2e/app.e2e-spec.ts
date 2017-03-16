import { Ng2ValidatorPage } from './app.po';

describe('ng2-validator App', () => {
  let page: Ng2ValidatorPage;

  beforeEach(() => {
    page = new Ng2ValidatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
