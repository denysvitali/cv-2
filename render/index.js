// Import puppeteer
console.log("Starting...");

const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    args: process.env.PUPPETEER_ARGS.split(" ") || [],
  });
  const page = await browser.newPage();

  await page.goto(process.env.TARGET_URL || "http://172.18.0.1:3001");

  // Paper size (A4) and margins are defined by the @page rule in src/assets/main.css.
  // Puppeteer's "A4" format rounds to inches (210.2 x 297.3 mm), so let the CSS win.
  await page.pdf({
    path: "output/cv.pdf",
    preferCSSPageSize: true,
    printBackground: true,
  });

  await browser.close();
})();
