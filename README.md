- 关于vite.config.ts的eslint报错
https://www.jiyik.com/tm/xwzj/web_953.html
配置ts的eslint校验的时候需要配置tsconfig.json的位置强制设置.eslintrc.js校验从根目录开始
从根目录开始就会找不到vite.config.ts，需要再设置一个ts的配置文件去继承tsconfig.ts