import React from 'react'

const GiftGridItem = ({id, url, titulo}) => {

     
    return (
        <div className="card">
            <img src={url} alt={id}/>
             <p>{titulo}</p>
        </div>
    )
}

export default GiftGridItem
