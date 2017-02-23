import { JazzfestAngularCliPage } from './app.po';

describe('jazzfest-angular-cli App', () => {
  let page: JazzfestAngularCliPage;

  beforeEach(() => {
    page = new JazzfestAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
