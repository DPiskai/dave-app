import { DaveAppPage } from './app.po';

describe('dave-app App', function() {
  let page: DaveAppPage;

  beforeEach(() => {
    page = new DaveAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
