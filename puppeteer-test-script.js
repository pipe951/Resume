const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8000'); // หรือ URL ของไฟล์ HTML ของคุณ

  // ทดสอบบางอย่างบนหน้า HTML เช่น ตรวจสอบว่ามีบางองค์ประกอบ
  const title = await page.title();
  console.log(title); // พิมพ์ชื่อหน้า

  await browser.close();
})();
