import React, {useState, useEffect} from 'react'
import GiftGridItem from './GiftGridItem'
import {getData} from './Helpers/Conection'
import {useGiftGridItem} from './hooks/useGiftGridItem'

const GifGrid = ({hero}) => {


    const {data:images , estado} = useGiftGridItem(hero)
    

    return (
        
        <div className= "card-grid"> 
            
                {
                    images.map((img) =>(
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
