import { Browser, Builder, WebDriver } from "selenium-webdriver"

/**
 * Basepage
 */
export class BasePage {
    driver = new Builder().forBrowser(Browser.CHROME).build()


    constructor(url: string)  {

        this.driver.navigate().to(url)
    }
}