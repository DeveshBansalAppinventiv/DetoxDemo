describe('Example', () => {
  beforeEach(async () => {
    await device.launchApp();
  });

  it('should show "loginForm"', async () => {
    await expect(element(by.id('login_form'))).toBeVisible();
  });
  it('should login', async () => {
    await element(by.text('Email')).tap();
    await element(by.id('email_text')).typeText("deveshbansal@gmail.com");
    await element(by.id('password_text')).typeText("testing");
    await element(by.id('login_btn')).tap();
  });


});