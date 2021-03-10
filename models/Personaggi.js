module.exports = (sequelize, DataTypes) => {
	return sequelize.define('personaggi', {
		user_id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		name: {
                        type: DataTypes.STRING,
			unique: true,
                        allowNull: false,
                },
		attacco: {
			type: DataTypes.INTEGER,
			defaultValue: 1,
			allowNull: false,
		},
		difesa: {
                        type: DataTypes.INTEGER,
                        defaultValue: 1,
                        allowNull: false,
                },
		velocita: {
                        type: DataTypes.INTEGER,
                        defaultValue: 1,
                        allowNull: false,
                },
		precisione: {
                        type: DataTypes.INTEGER,
                        defaultValue: 0,
                        allowNull: false,
                },
		pvp: {
                        type: DataTypes.BOOLEAN,
                        defaultValue: false,
                        allowNull: false,
                },

	}, {
		timestamps: false,
	});
};
