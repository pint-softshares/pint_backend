const Sequelize = require('sequelize');
const sequelize = require('./database');
const bcrypt = require('bcrypt');
const Cidade = require('./cidade')

const Colaborador = sequelize.define('colaborador', {
    IDCOLABORADOR: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    EMAIL: Sequelize.STRING,
    PASSWORDCOLABORADOR: Sequelize.STRING,
    NOME: Sequelize.STRING,
    TELEMOVEL: Sequelize.STRING,
    CIDADE: {
        type: Sequelize.INTEGER,
        references: {
            model: 'cidade',
            key: 'IDCIDADE'
        }
    },
    DATANASCIMENTO: Sequelize.DATEONLY,
    DATAREGISTO: Sequelize.DATEONLY,
    ULTIMOLOGIN: Sequelize.DATEONLY,
},
{
timestamps: false,
tableName: 'colaborador'
});

Colaborador.belongsTo(Cidade, { foreignKey: 'CIDADE' });

Colaborador.beforeCreate((colaborador, options) =>{
    return bcrypt.hash(colaborador.PASSWORDCOLABORADOR, 10)
    .then(hash =>{
        colaborador.PASSWORDCOLABORADOR = hash;
    })
    .catch(err => {
        throw new Error();
    })
})

module.exports = Colaborador;