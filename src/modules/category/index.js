describe('category page', () => {
  test('#14784 category页左边栏有很多的category时，滑动页面时左边栏显示问题', async () => {
    const page = global.__page__;
    await page.emulate(global.__PC__);
    await page.goto(global.__getPageUrl__('/1998-ford-contour--2_0l_l4-4at_cd4e-parts.html'));
    await page.waitForSelector('.category-menu-item');
    // 模拟滚动
    await page.evaluate(() => {
      window.scrollTo(0, 4000);
      return Promise.resolve();
    });

    // await page.waitFor(1000);

    const fixedTop = await page.$eval(
      '.category-menu-item.category-menu-active',
      el => el.getBoundingClientRect().top
    );
    const clientHeight = await page.evaluate(() => {
      return Promise.resolve(document.documentElement.clientHeight);
    });
    // 判断左边栏 active item 是否可见
    expect(fixedTop).toBeLessThan(clientHeight);
  }, 1500000);

  test('测试移动端高亮时是否展开列表', async () => {
    const page = global.__page__;
    await page.emulate(global.__iPhone7__);
    await page.goto(global.__getPageUrl__('/2019-ford-flex-parts.html?category=Engine'));
    await page.waitForSelector('.category-list-item');
    const isUnfold = await page.$eval('.category-list-current .ab-collapse-content', el => {
      return getComputedStyle(el, null)['display'];
    });
    expect(isUnfold).toBe('block');
  }, 1500000);
});
