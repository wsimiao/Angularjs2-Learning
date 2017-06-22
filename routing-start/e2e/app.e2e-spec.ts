import { RoutingStartPage } from './app.po';

describe('routing-start App', () => {
  let page: RoutingStartPage;

  beforeEach(() => {
    page = new RoutingStartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
