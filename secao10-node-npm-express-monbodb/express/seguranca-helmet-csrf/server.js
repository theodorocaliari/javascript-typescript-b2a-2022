const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes");
const { response } = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flashMassages = require("connect-flash");
const helmet = require("helmet");
const csrf = require("csurf");
const { outroMiddleware, middlewareGlobal, checkCsrfError, csrfMiddleware } = require("./src/middlewares/middleware");

require("dotenv").config({
  path: path.resolve(__dirname, "./.env"),
});

const MONGO_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.cmuasxv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const mongoose = require("mongoose");
const csurf = require("csurf");

mongoose.set("strictQuery", true);
mongoose
  .connect(MONGO_URI, { dbName: `${process.env.DB_NAME}`, useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Base de dados conectada.");
    app.emit("pronto");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public"))); //caminho absoluto para o diretorio public
//caminho absoluto para views

//configurando session
const sessionOptions = session({
  secret: "chavealeatoria",
  store: MongoStore.create({
    mongoUrl: MONGO_URI,
    //mongooseConnection: mongoose.connection,
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  },
});

app.use(sessionOptions);
app.use(flashMassages());

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs"); //ejs possibilita o uso de loops e recursos dinamicos no html

app.use(csrf());

//middlewares
app.use(middlewareGlobal);
app.use(outroMiddleware);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

//quando emitir o sinal de "pronto" sera executada o listen
app.on("pronto", () => {
  app.listen(process.env.NODE_PORT, () => {
    console.log(`Servidor executando na porta ${process.env.NODE_PORT}`);
    console.log(`http://${process.env.NODE_HOST}:${process.env.NODE_PORT}`);
  });
});
