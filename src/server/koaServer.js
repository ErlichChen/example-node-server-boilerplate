import Koa from "koa";

export default koaSerever = app => {
  const koaApp = new Koa();

  return {
    async start() {
      return new Promise((resolve, reject) => {
        koaApp.listen(port, function() {
          console.log("koa server started");
          resolve();
        });
      })
    },
    async stop() {
      return new Promise((resolve, reject) => {

      })
    }
  }
}
