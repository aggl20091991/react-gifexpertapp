import React,{useState,useEffect} from 'react'
import GrifGridItem from './GrifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

function GifGrid({category}) {
  
 console.log(category);   
const {data:images,loading} = useFetchGifs( {category} );

return (
      <>
    <h3>{category}</h3>
    
<div className="card-grid">
        {
            //otra manera de enviar parametros a objetos
            images.map(img=>(
            <GrifGridItem key={img.id} {...img} />
        ))
        }
      
</div>
</>
  )
}

export default GifGrid