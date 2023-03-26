// Importa a biblioteca do sequelize
const Sequelize = require("sequelize");

// Configuração de banco (Observe que é necessário criar o SCHEMA 'test')
const dbConfig = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "1234",
  DB: "test",
  dialect: "mysql",
};

// Cria a conexão com o banco
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

// Define o livro (cria a tabela do livro, caso ela não exista)
const livro = sequelize.define("livro", {
  titulo: {
    type: Sequelize.STRING,
  },
  descricao: {
    type: Sequelize.STRING,
  },
  publicado: {
    type: Sequelize.BOOLEAN,
  },
});

// Método principal do programa
async function main() {
  // Inicializa/sincroniza com o banco configurado acima e com os objetos definidos acima.
  await sequelize.sync();
  // Lista todos os livros.
  let todosLivros = await livro.findAll();
  console.log("Antes de adicionar livro", todosLivros);

  // Cria um novo livro
  await livro.create({
    title: "Livro1",
    description: "Descricao",
    published: false,
  });

  // Lista todos os livros, agora com um novo livro chamado Livro1
  all = await livro.findAll();
  console.log("Depois de adicionar livro", todosLivros);

  //Finaliza a conexão com o banco
  await sequelize.close();
}

// Executando o método principal
main();
