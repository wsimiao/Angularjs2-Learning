import { DirectiveStartPage } from './app.po';

describe('directive-start App', () => {
  let page: DirectiveStartPage;

  beforeEach(() => {
    page = new DirectiveStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
