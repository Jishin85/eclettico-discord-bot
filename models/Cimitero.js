module.exports = (sequelize, DataTypes) => {
	return sequelize.define('cimitero', {
		name: {
			type: DataTypes.STRING,
			unique: true,
		},
		desc: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	}, {
		timestamps: false,
	});
};
