const express = require("express");
const RoutesApp = require("./routes/indexRoutes");
const app = express();
const port = 3001;

app.use(express.json());

RoutesApp(app);

app.listen(port, () => {
  console.log(`The service is working in the port ${port}`);
});
