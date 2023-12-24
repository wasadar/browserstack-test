export class FormPage {
    get textInputField () {
        return $(`//android.widget.EditText[@content-desc="text-input"]`);
    }

    get textOutputField () {
        return $(`//android.widget.TextView[@content-desc="input-text-result"]`);
    }

    get switch () {
        return $(`//android.widget.Switch[@content-desc="switch"]`);
    }

    get dropdownBase () {
        return $(`//android.widget.EditText[@text="Select an item..."]`);
    }

    get dropdownPopUpLast () {
        return $(`//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="This app is awesome"]`);
    }

    get dropdownResult () {
        return $(`//android.widget.EditText[@text="This app is awesome"]`);
    }

    get activeButton () {
        return $(`//android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup`);
    }

    get inactiveButton () {
        return $(`//android.view.ViewGroup[@content-desc="button-Inactive"]/android.view.ViewGroup`);
    }

    get closePopUpButton () {
        return $(`//android.widget.Button[@resource-id="android:id/button1"]`);
    }

    async open () {
        await $(`//android.widget.Button[@content-desc="Forms"]`).click();
    }
}

export default new FormPage();