

import {useState, useEffect} from 'react'
import { getData } from '../Helpers/Conection'

 export const useGiftGridItem = (hero) => {

    const [imagen, setImagen] = useState({data:[], estado: false})

  
    useEffect(()=>{

      

            getData(hero).then(img => {
                setImagen({data:img, estado: false})
            })
    
      


    },[hero])


   

    return imagen

}


