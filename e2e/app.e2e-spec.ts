import { HouseOfCGIPage } from './app.po';

describe('house-of-cgi App', function() {
  let page: HouseOfCGIPage;

  beforeEach(() => {
    page = new HouseOfCGIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
