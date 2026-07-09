const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 2400, height: 1600, deviceScaleFactor: 2 });
  await page.goto('file:///Users/dingding/Desktop/space/snake-bracket-chart.html', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 3000));
  await page.evaluate(() => document.fonts.ready);
  const height = await page.evaluate(() => {
    const inner = document.querySelector('.inner');
    return inner ? inner.scrollHeight + 40 : document.body.scrollHeight;
  });
  console.log('Content height: ' + height);
  await page.setViewport({ width: 2400, height: height, deviceScaleFactor: 2 });
  await page.screenshot({ path: '/Users/dingding/Desktop/space/snake-bracket-chart.png', clip: { x: 0, y: 0, width: 2400, height: height } });
  console.log('Screenshot saved!');
  await browser.close();
})();