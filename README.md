- 关于 vite.config.ts 的 eslint 报错
  https://www.jiyik.com/tm/xwzj/web_953.html
  配置 ts 的 eslint 校验的时候需要配置 tsconfig.json 的位置强制设置.eslintrc.js 校验从根目录开始
  从根目录开始就会找不到 vite.config.ts，需要再设置一个 ts 的配置文件去继承 tsconfig.ts
