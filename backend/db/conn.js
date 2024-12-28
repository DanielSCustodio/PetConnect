const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://localhost:27017/petconnect');
  console.log('Banco de dados conectado');
}

main().catch((error) => console.log(error));

module.exports = mongoose;
