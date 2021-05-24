///Inserción y actualización de un registro

const Sequelize = require('sequelize');

const sequelize = new Sequelize('clase 4', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb' /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});

sequelize
  .authenticate()
  .then(() => {
    console.log('La conexión fue exitosa');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos: ', err);
  });



class Jedis extends Sequelize.Model {}
Jedis.init({
  nombre: Sequelize.STRING,
  apellido:Sequelize.STRING
}, { sequelize, modelName: 'users' });


Alumnos.update({ nombre: "XXXXXXX" }, {
    where: {
        apellido: 'Skywalker'
    }
  }).then(() => {
    console.log("Jedi actualizado");
  });