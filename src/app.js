import Server from './server/koaServer';

export default function App() {

  const app = {
    env() {
      console.log('Port: ' + process.env.PORT);
    },

    async start() {
      console.log('server start');
      await app.server.start();
      console.log('server started');
    },

    async stop() {
      console.log('server stop');
      await app.server.stop();
      console.log('server stopped');
    }

  };

  app.server = Server(app);

  return app;
}
