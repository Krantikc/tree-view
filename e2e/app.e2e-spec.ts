import { TreeGridPage } from './app.po';

describe('tree-grid App', () => {
  let page: TreeGridPage;

  beforeEach(() => {
    page = new TreeGridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
