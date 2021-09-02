module.exports = (sequelize, DataTypes) => {

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING
        },
        rating: {
            type: DataTypes.DECIMAL
        },
        awards: {
            type: DataTypes.INTEGER
        },
        release_date: {
            type: DataTypes.DATE
        },
        length: {
            type: DataTypes.INTEGER
        },
        genre_id: {
            type: DataTypes.INTEGER
        },
        //createdAt
        created_at: {
            type: DataTypes.DATE
        },
        //updatedAt
        updated_at: {
            type: DataTypes.DATE
        }

    };
    
    let config = {
        tableName: "movies",
        timestamps: false //Si created y update at estuviesen bien escritos, esto iria en true y no seria necesario definir las columnas
    };

    const Pelicula = sequelize.define("Pelicula", cols , config);

    return Pelicula

}

