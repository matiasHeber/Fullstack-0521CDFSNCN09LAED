module.exports = (sequelize, dataTypes) => {
    let alias = 'Character'; //characters
    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100)
        },
        status: {
            type: dataTypes.STRING(100)
        },
        species: {
            type: dataTypes.STRING(100)
        },
        image: {
            type: dataTypes.STRING(255)
        }
    };
    let config = {
        timestamps: true,
        // tablename: 'caracteres'
    };
    
    const Character = sequelize.define(alias, cols, config);
    
    // Character.associate = models => {
    //     Character.belongsToMany(models.Episodes, {
    //         as: 'episodes',
    //         through: 'character_episode',
    //         foreignKey: 'character_id',
    //         otherKey: 'episode_id',
    //         timestamps: false
    //     })

    // }




    return Character;
}