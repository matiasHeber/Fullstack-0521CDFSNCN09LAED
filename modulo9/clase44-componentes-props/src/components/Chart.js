import React from 'react';
import ChartRow from './ChartRow';

let tableRowsData = [
    {
        title: 'Billy Elliot',
        length: '123',
        rating: '6',
        categories: ['Drama', 'Comedia'],
        awards: 2,
    },
    {
        title: 'Alicia en el pais de las maravillas',
        length: '145',
        rating: '4.5',
        categories: ['Drama', 'Accion', 'Fantasia'],
        awards: 3,
    }
]


function Chart(){
    return(
        <div className='card shadow mb-4'>
            <div className='card-body'>
                <table className='table table-bordered' width='100%' cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Titulo</th>    
                            <th>Duracion</th>    
                            <th>Rating</th>    
                            <th>Genero</th>    
                            <th>Premios</th>    
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Titulo</th>    
                            <th>Duracion</th>    
                            <th>Rating</th>    
                            <th>Genero</th>    
                            <th>Premios</th>    
                        </tr>
                    </tfoot>
                    <tbody>
                        {tableRowsData.map((row, i)=>{
                            return <ChartRow {...row} key={i}/>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Chart;