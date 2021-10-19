import React from 'react';
import SmallCard from './SmallCard';

let moviesInDB ={
    title: "Movies in Data Base",
    color: "primary",
    cuantity: 21,
    icon: "fa-film"
}

let totalAwards = {
    title: "Total Awards",
    color: 'success',
    cuantity: 79,
    icon: "fa-award"
}

let actorsQuantity = {
    title: "Actors quantity",
    color: "warning",
    cuantity: 49,
    icon: "fa-user"
}


let cardProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowMovies() {
    return(
        <div className="row">
            
            {cardProps.map((info, idx) => {
                return <SmallCard cardInfo={info} key={idx}/>
            }) }
            
        </div>
    )
};

export default ContentRowMovies;