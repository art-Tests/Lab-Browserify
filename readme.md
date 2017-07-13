## Command
```dos
yarn add chai --dev
yarn add karma karma-chrome-launcher karma-coverage karma-mocha --dev
yarn add gulp gulp-karma gulp-mocha mochawesome --dev
```
## How To Start
1. yarn install
2. bower install
3. gulp

## Gulp
1. Build-Js：透過gulp-browserify將js打包，並可於程式碼內使用require
2. Mocha：執行單元測試，並產生報告`/report/TestReport.html`
3. Karma：執行瀏覽器測試，並產生程式碼覆蓋率報告`/report/converage/chrome/index.html`

透過gulp打包js後，取得dist目錄下的bundle.js使用