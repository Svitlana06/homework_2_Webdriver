const { Before, After } = require('@cucumber/cucumber');
const { inputData, url } = require('../../data/data');
const { pages } = require('../../po');

Before(async function (scenario) {
  if (scenario.pickle.tags.some((tag) => tag.name === '@login')) {
    try {
      await pages('homePage').open();
      await pages('homePage').headerHomeComponent.signInBtn.click();

      await browser.waitUntil(
        async () => {
          return (await browser.getUrl()).includes(url.login);
        },
        { timeout: 10000 }
      );

      await pages('registrationPage')
        .registrationComponent.input('username')
        .setValue(inputData.emailLogIn);
      await pages('registrationPage').registrationComponent.submitBtn('signIn').click();

      await browser.waitUntil(
        async () => {
          return await pages('registrationPage')
            .registrationComponent.input('password')
            .isDisplayed();
        },
        { timeout: 10000 }
      );

      await pages('registrationPage')
        .registrationComponent.input('password')
        .setValue(inputData.password);
      await pages('registrationPage').registrationComponent.submitBtn('signIn').click();

      await browser.waitUntil(
        async () => {
          return (await browser.getUrl()).includes(url.boards);
        },
        { timeout: 15000 }
      );
    } catch (error) {
      console.error('Error in Before hook:', error);
    }
  }
});
After(async function () {
  await browser.deleteCookies();
});

module.exports = { After, Before };
