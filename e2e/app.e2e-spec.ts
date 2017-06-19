import { MoneyAnalyticsPage } from './app.po';

describe('money-analytics App', () => {
  let page: MoneyAnalyticsPage;

  beforeEach(() => {
    page = new MoneyAnalyticsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
