import { By } from "selenium-webdriver"
import {BasePage} from "./BasePage.js"

/**
 * source: https://www.saucedemo.com/
 */
export class SauceDemoPage extends BasePage {
    //properties of the page:
    username: By = By.id("user-name")
    password: By = By.id("password")
    button: By = By.id("login-button")

    //behavior of the page
    async insertUsername(username: string) {
        await this.driver.findElement(this.username).sendKeys(username)
    }
    async insertPassword(password: string) {
        await this.driver.findElement(this.password).sendKeys(password)
    }

    async login(username: string, password: string) {
        await this.insertUsername(username);
        await this.insertPassword(password);

        await this.driver.findElement(this.button).click();
    }
}