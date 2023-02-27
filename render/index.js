// Import puppeteer
console.log("Starting...");

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://172.18.0.1:3001');
  
  let margin = "1cm";

  await page.pdf({
    path: 'output/cv.pdf',
    format: 'A4',
    margin: {
      top: margin,
      left: margin,
      bottom: margin,
      right: margin,
    },
    printBackground: true
  });

  await browser.close();
})();
