import { browser, by, element, protractor, ElementFinder } from "protractor";

describe('Search', () => {
    
    it('Open google and find a text', async () => {
        let EC = protractor.ExpectedConditions;
      
        await browser.waitForAngularEnabled(false);
        await browser.get('https://www.google.com/');
        
        let input_button = element(by.css("input[role='combobox']"));
        await browser.wait(EC.presenceOf(input_button), 5000);
        await input_button.sendKeys("protractor");

        let submit_button = element(by.css(".FPdoLc input[type='submit'][name='btnK']"));
        await browser.wait(EC.presenceOf(submit_button), 5000);
        await submit_button.click();

        await browser.wait(EC.urlContains('protractor'), 5000);
    });
});
