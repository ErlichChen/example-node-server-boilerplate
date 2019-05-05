import App from './app';

console.log("start to run node api server");
let app = App();
app.env();

app.start()
.catch(err => {
  console.error("App ending with error: ", err);
  console.error("App ending with error: ", JSON.stringify(err));
});
