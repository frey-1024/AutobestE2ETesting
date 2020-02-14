const path = require('path');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone6 = devices['iPhone 6'];
const iPhone7 = devices['iPhone 7 Plus'];
const iPad = devices['iPad'];
const iPadLandscape = devices['iPad landscape'];
const PC = {
  userAgent:
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.90 Safari/537.36',
  viewport: {
    width: 1519,
    height: 1080,
    deviceScaleFactor: 1,
    isMobile: false,
    hasTouch: false,
    isLandscape: false
  }
};

module.exports = {
  verbose: true,
  reporters: ['default', 'jest-allure'],
  rootDir: process.cwd(),
  globals: {
    __iPhone6__: iPhone6,
    __iPhone7__: iPhone7,
    __iPad__: iPad,
    __iPadLandscape__: iPadLandscape,
    __PC__: PC,
    __getPageUrl__: function(url) {
      return `https://fpp.dev.autobestdevops.com${url}`;
    },
    __puppeteerConfig__: {
      devtools: false,
      headless: false,
      slowMo: 250,
      defaultViewport: null,
      timeout: 150000,
      args: [
        '--window-size=1519,1080',
        '--disable-gpu',
        '--disable-dev-shm-usage',
        '--disable-setuid-sandbox',
        '--no-first-run',
        '--no-sandbox',
        '--no-zygote',
        '--single-process'
      ]
    }
  },
  testRegex: path.resolve(process.cwd(), 'src/index.js')
};
