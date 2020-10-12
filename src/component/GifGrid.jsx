import React, {useState, useEffect} from 'react'
import GiftGridItem from './GiftGridItem'
import {getData} from './Helpers/Conection'

const GifGrid = ({hero}) => {

     const [imagen, setImagen] = useState([ ])


    useEffect(()=>{

        getData(hero).then(data => setImagen(data))
        
    },[hero])

   


    return (
        
        <div className= "card-grid"> 
            
                {
                    imagen.map((img) =>(
                      <GiftGridItem
                        key = { img.id}
                        {...img}

                       />
                    
                    ))
                }
            
        </div>
    )
}

export default GifGrid
