const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('Kết nối với cơ sở dữ liệu thành công');
  })
  .catch(err => {
    console.error('Có sự cố khi kết nối với cơ sở dữ liệu:', err);
  });

const Points = sequelize.define('KoraPoint', {
    nameid: {
        type: Sequelize.BIGINT,
        unique: true,
    },
    name: {
        type: Sequelize.STRING,
        unique: true,
    },
    points: {
        type: Sequelize.BIGINT,
        allowNull: false,
    },
});

module.exports = { Points };