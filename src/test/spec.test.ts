import { SauceDemoPage } from "../pages/SauceDemoPage.js";
import { should, expect } from "chai";


describe("sample test", () => {
    let page: SauceDemoPage;

    before("init page", ()  => {
        page = new SauceDemoPage();
        
    });

    it("login a user", async () => {
        await page.search("https://www.saucedemo.com/")
        const username = "standard_user"
        const password = "secret_sauce"
        
        await page.login(username, password);
    });
});