import FormPage from '../pages/form-page.js';
import generateRandomString from '../helpers.js';
 
describe('Form tests', () => {
    before(async () => {
        await FormPage.open();
    });

    it('Text in input field is copied to result field', async () => {
        let value = generateRandomString(6);

        await FormPage.textInputField.setValue(value);

        expect(await FormPage.textOutputField.getText()).toEqual(value);
    });

    it('Switch should change it\'s state after taping', async () => {
        expect(await FormPage.switch.getText()).toEqual('OFF');

        await FormPage.switch.click();

        expect(await FormPage.switch.getText()).toEqual('ON');
    });

    it('Dropdown menu should change it\'s state', async () => {
        await FormPage.dropdownBase.click();

        await FormPage.dropdownPopUpLast.click();

        expect(await FormPage.dropdownResult.isDisplayed()).toEqual(true);
    });

    it('Active button should open modal window', async () => {
        await FormPage.activeButton.click();

        expect(await FormPage.closePopUpButton.isDisplayed()).toEqual(true);

        await FormPage.closePopUpButton.click();
    });

    it('Inactive button shouldn\'t open model window', async () => {
        await FormPage.inactiveButton.click();

        expect(await FormPage.closePopUpButton.isDisplayed()).toEqual(false);
    });
});