const express = require("express");
const app = express();
const path = require("path"); //caminhos absolutos
const routes = require("./routes"); //configuracao de rotas da aplicacao
const mongoose = require("mongoose"); //modela a base de dados
const session = require("express-session"); //sessoes para identificar o navegador, cookie
const MongoStore = require("connect-mongo"); //salva a sessao dentro da base de dados
const flashMassages = require("connect-flash"); //mensagem que após ler ela é apagada da base de dados (mensagem de feedback)
const helmet = require("helmet"); //seguranca
const csrf = require("csurf"); //tokens de seguranca para formularios
const { outroMiddleware, middlewareGlobal, checkCsrfError, csrfMiddleware } = require("./src/middlewares/middleware"); //

require("dotenv").config({
  path: path.resolve(__dirname, "./.env"),
});

const MONGO_URI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.cmuasxv.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

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
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "public"))); //caminho absoluto para o diretorio public

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

//caminho absoluto para views
app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs"); //ejs possibilita o uso de loops e recursos javascript (dinamicos) no html
//app.set('view engine', 'pug');

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
