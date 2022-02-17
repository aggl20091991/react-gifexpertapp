
    //peticion asincrona
   export const getGifs = async(category)=>{
        const url = 'http://api.giphy.com/v1/gifs/search?api_key=oaddHPdy2Ush3FDtsixT6QovxKicH5np&q='
        +encodeURI(category)+'&limit=10';
        console.log(category);
        const response =  await fetch(url);
        const {data} = await response.json();
        const gifs = data.map(img =>{
            return {
                id:img.id,
                title:img.title,
                url:img.images?.downsized_medium.url
            }
        })

        return gifs
    }