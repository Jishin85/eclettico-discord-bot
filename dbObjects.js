const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const Personaggi = require('./models/Personaggi')(sequelize, Sequelize.DataTypes);
const Cimitero = require('./models/Cimitero')(sequelize, Sequelize.DataTypes);

/* eslint-disable-next-line func-names */
Personaggi.prototype.addUser = async function(user) {
	const pg = await Personaggi.findOne({
		where: { user_id: this.user_id },
	});


/* eslint-disable-next-line func-names */
Users.prototype.getItems = function() {
	return UserItems.findAll({
		where: { user_id: this.user_id },
		include: ['nome'],
	});
};

module.exports = { Personaggi, Cimitero };
