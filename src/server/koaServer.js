import Koa from "koa";

export default function(app) {
  const koaApp = new Koa();

  return {
    koa: koaApp,

    async start() {
      // let port = process.env.PORT || configHttp.port;
      const port = 3001;
      return new Promise((resolve, reject) => {
        koaApp.listen(port, function() {
          console.log("koa server started");
          resolve();
        });
      })
    },

    async stop() {
      if (!httpHandle) {
        console.log("koa server is already stopped");
        return;
      }
      return new Promise(function(resolve) {
        httpHandle.close(function() {
          console.log("koa server is stopped");
          resolve();
        });
      });
    }
  }
}
