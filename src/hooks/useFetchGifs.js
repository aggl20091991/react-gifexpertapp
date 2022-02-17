import {useState,useEffect} from 'react'
import { getGifs } from '../helper/getGifs'

export const useFetchGifs=({category}) => {

    const [state, setState] = useState({
        data:[],
        loading:true
    })
    console.log("catToSearch");
    console.log(category);
    useEffect(()=>{
        getGifs(category)
        .then(result=>setState({
            data:result,
            loading:false
        }));
        
    /*setTimeout(() => {
        setState({
            data:[1,2,3],
            loading:false
        })
    }, 3000);*/

    },[category])
    return state
}