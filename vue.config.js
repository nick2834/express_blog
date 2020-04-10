let pageMethod = require("./util/getPages.js");
pages = pageMethod.pages();
module.exports = {
  pages,
  publicPath: process.env.NODE_ENV === "production" ? "/dist/" : "/",
  devServer: {
    open: true, // 项目构建成功之后，自动弹出页面
    host: "localhost", // 主机名，也可以127.0.0.0 || 做真机测试时候0.0.0.0
    port: 8081, // 端口号，默认8080
    https: false, // 协议
    hotOnly: false, // 没啥效果，热模块，webpack已经做好了
    proxy: {
      "/users/*": {
        target: "http://localhost:3000"
      },
      "/article/*": {
        target: "http://localhost:3000"
      },
    }
  }
};
