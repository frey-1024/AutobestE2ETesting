const puppeteer = require('puppeteer');
const report = require('jest-allure/dist/setup');

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch(global.__puppeteerConfig__);
  page = await browser.newPage();
  global.__page__ = page;
  report.registerAllureReporter();
});

afterAll(async () => {
  browser.close();
});

require('./injection');
