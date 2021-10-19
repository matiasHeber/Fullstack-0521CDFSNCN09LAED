import React from 'react';
import PropTypes from 'prop-types';

function SmallCard({cardInfo}) {
    return(
        <div className="col-md-4 mb-4">
            {/* <div className={"card border-left-"+ props.cardInfo.color +"shadow h-100 py-2"}> */}
            <div className={`card border-left-${cardInfo.color} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${cardInfo.color} text-uppercase mb-1`}>{cardInfo.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{cardInfo.cuantity}</div>
                        </div>
                        <div className="col-auto">
                            <i className={`fas ${cardInfo.icon} fa-2x text-gray-300`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// - título: de tipo string y obligatorio.
// - color de borde: de tipo string y obligatorio.
// - cifra: de tipo string o de tipo number y obligatorio.
// - ícono: una de las siguientes tres opciones: border-left-primary, border-left-success o border-left-warning; y obligatorio.

SmallCard.propTypes ={
    atributes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        cuantity: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        icon: PropTypes.string.isRequired,
    })
}


export default SmallCard;