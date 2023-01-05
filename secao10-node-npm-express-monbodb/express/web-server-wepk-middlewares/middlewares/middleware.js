module.exports = (req, res, next) => {
  //middleware é um recurso que possibilita um controle de informações intermediarias entre a requisição e a resposta em um sistema
  console.log("passei no middleware global");
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};
