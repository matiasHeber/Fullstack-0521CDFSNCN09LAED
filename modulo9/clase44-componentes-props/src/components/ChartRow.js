import React from 'react'

function ChartRow({title, length, rating, categories, awards}) {
    return(
        <tr>
            <td>{title}</td>
            <td>{length}</td>
            <td>{rating}</td>
            <td>
                <ul>
                    {categories.map((category,i) => <li key={`category ${i}`}>{category}</li>)}
                </ul>
            </td>
            <td>{awards}</td>
        </tr>
    )
}

export default ChartRow;