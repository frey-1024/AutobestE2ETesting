# 项目运行说明

### 安装

1. 安装`nodejs`;
2. `npm install`, 这里需要翻墙，下载`Chromium`;
3. `npm run test:site`, site是变量, 必须小写， 例如： `npm run test:fpp`;
4. 等待执行完，可以查看报考： `npm run openReport`

### 自己添加测试配置

可在`package.json`中的`scripts`中复制并增加相关site。

## 测试参考文档

1. [Puppeteer](https://zhaoqize.github.io/puppeteer-api-zh_CN/#/)
2. [Jest](https://jestjs.io/docs/en/getting-started.html)

## 其他

如果不能下载`Chromium`, 可以执行忽略命令`env PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true npm i puppeteer -D`