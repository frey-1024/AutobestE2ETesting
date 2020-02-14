test('#14840 首页、make页选车区域样式问题', async () => {
  const page = global.__page__;
  // await page.emulate(global.__iPhone6__);
  await page.goto(global.__getPageUrl__('/'));
  await page.waitForSelector('.ab-pv-c-title');
  const { paddingBottom, fontSize } = await page.$eval('.ab-pv-c-title', el => {
    return {
      paddingBottom: getComputedStyle(el, null)['padding-bottom'],
      fontSize: getComputedStyle(el, null)['font-size']
    };
  });
  // 字体间距和字体大小判断
  expect(paddingBottom).toBe('25px');
  expect(fontSize).toBe('24px');
}, 1500000);

test('#14948 选车区域输入VIN后， 按回车键应该可以触发Go按钮', async () => {
  const page = global.__page__;
  // 删除cookie
  await page.deleteCookie({ name: 'GuidNew' });
  // 浏览器刷新
  await page.reload();
  await page.waitForSelector('.ab-pv-base-vin');
  // 模拟用户输入
  await page.type('.ab-pv-base-vin input', '11111111111111111');
  // 按enter键
  await page.keyboard.press('Enter');
  await page.waitForSelector('.ab-pv-vsh-title');
  const text = await page.$eval('.ab-pv-vsh-title', el => el.textContent);
  // 判断是否显示提示框
  expect(text).toBe('Currently we are unable to process your VIN number.');
}, 1500000);
