


  
    export const getData = async(hero) =>{
        const heroe = hero;
        const heroes = `q=${encodeURI(heroe)}` || null
        const url =`https://api.giphy.com/v1/gifs/search?limit=4&${heroes}&api_key=1mJcHsjFYhi8KLJSCIY0fPQDJsgBWRWZ`;
        const  resp = await fetch(url)
        const {data} = await resp.json();
        const gifts = data.map(item =>{
            return {
                id: item.id,
                titulo: item.title,
                url: item.images.original.url
            }
        })
        
    return gifts

    }






