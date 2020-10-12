import React, {useState} from 'react'
import GifGrid from './GifGrid'



const Formulario = () => {
    
  const [hero, setHero]  = useState('')
  const [gift, setGift]  = useState('')
  // const [ heroe, setHeroe] = React.useState(heroes)




  // const addElemen= () => {

  //   console.log('object');

  // }


  const handleSubmit = (e) => {
      e.preventDefault();

      setGift(hero)
       console.log(gift);
  }


    return (
     <div className="row contenedor">
       
       <GifGrid hero={hero}/>
        
      <div className="col-5">
        {hero}
             
        <form   onSubmit={handleSubmit} className="m-5  fomu">

            <div className="form-group">

            <label >ingrese</label>
            <input 
            className="form-control"
            width="5px"         
            type="text"
           value= {hero}
           onChange={e =>setHero(e.target.value)}
           />
          <button  className="mt-5 btn btn-outline-success btn-block" type="submit" >agregar</button>

            </div>

        
        </form>
        

      
      </div>
       
      
    </div>
    )
}

export default Formulario
