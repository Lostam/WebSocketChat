import { AppChatPage } from './app.po';

describe('app-chat App', () => {
  let page: AppChatPage;

  beforeEach(() => {
    page = new AppChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
