const path = require("path");
const express = require("express");
const compression = require("compression");
const session = require("express-session");
const cors = require("cors");
const settings = require("./configs/setting");
const { morganLogger } = require("./middlewares/morgan");
const Sentry = require("@sentry/node");
const routes = require("./configs/routes");

const app = express();
app.use(compression());
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({
    extended: true,
    limit: "50mb",
  })
);
app.use(express.static(path.join(__dirname, "../public")));
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: settings.sessionSecret,
  })
);

app.use(cors());
app.options("*", cors());
app.use(morganLogger());

app.use("/api/user-service/v1", routes);

// app.use(
//   Sentry.Handlers.errorHandler({
//     shouldHandleError(error) {
//       // Capture all 404 and 500 errors
//       if (error.status === 404 || error.status === 500) {
//         return true;
//       }
//       return false;
//     },
//   })
// );

app.use((req, res) => {
  res.status(404).send({ url: `${req.path} not found` });
});

module.exports = app;
