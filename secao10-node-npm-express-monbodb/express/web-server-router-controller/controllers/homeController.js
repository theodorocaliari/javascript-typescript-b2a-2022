exports.paginaInicial = (req, res) => {
  res.send(`
  <h1>Hello World!</h1>
    <form action="/" method="POST">
      Nome: <input type="text" name="nome">
      <button>Enviar</button>
    </form>
  `);
};

exports.trataPost = (req, res) => {
  res.send("Mensagem de feedback post");
};
