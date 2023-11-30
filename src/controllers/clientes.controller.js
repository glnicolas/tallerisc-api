const { throwSequelizeError, throwLogicError } = require("../utils/utils");
const { cliente: Cliente } = require("../models");
const { sequelize } = require("../models");

module.exports = { getAll, getById, create, update };

async function getAll() {
  return await Cliente.findAndCountAll().catch((err) =>
    throwSequelizeError(err)
  );
}

async function getById(id) {
  return await Cliente.findByPk(id).catch((err) => throwSequelizeError(err));
}

async function create(cliente) {
  return await Cliente.create(cliente).catch((err) => {
    throwSequelizeError(err);
  });
}
async function update(id, data) {
  const cliente = await getById(id);

  if (!cliente)
    throwLogicError({
      name: "Datos inválidos",
      status: 400,
      message: "Cliente no encontrado",
    });

  return await cliente.update(data).catch((err) => {
    throwSequelizeError(err);
  });
}
