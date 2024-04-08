import { Browser, Builder, WebDriver } from "selenium-webdriver"

/**
 * Basepage
 */
export class BasePage {
    driver = new Builder().forBrowser(Browser.CHROME).build();


    async search(url: string)  {
        await this.driver.navigate().to(url)
    }
}