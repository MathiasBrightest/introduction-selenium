import { SauceDemoPage } from "../pages/SauceDemoPage.js";
import { should, expect } from "chai";


describe("sample test", () => {
    let page: SauceDemoPage;

    before("init page", ()  => {
        page = new SauceDemoPage("https://www.saucedemo.com/");
        should()
    });

    it("do a test", () => {
        const nameOfButton = "Login";

        expect(page.driver.findElement(page.button).getText()).to(nameOfButton)

    });
});