module.exports = (sequelize, dataTypes) => {
    let alias = 'Character';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(255)
        },
        status: {
            type: dataTypes.STRING(255)
        },
        species: {
            type: dataTypes.STRING(255)
        },
        image: dataTypes.STRING(255)
    };
    let config = {
        timestamps: false,
    }
    const Character = sequelize.define(alias, cols, config); 

    return Character
};