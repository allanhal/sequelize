const Sequelize = require("sequelize");

const dbConfig = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "1234",
  DB: "test",
  dialect: "mysql",
};

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

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

async function main() {
  await sequelize.sync();
  let todosLivros = await livro.findAll();
  console.log("Antes de adicionar livro", todosLivros);

  await livro.create({
    title: "Livro1",
    description: "Descricao",
    published: false,
  });

  all = await livro.findAll();
  console.log("Depois de adicionar livro", todosLivros);
  await sequelize.close()
}


main();
