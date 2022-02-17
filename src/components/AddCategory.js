import React, {useState} from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {
    const [inputValue,setInputValue] = useState('');
    const handlerInputChange = (e) =>{
        setInputValue(e.target.value)
    }
    const handlerSubmit = (e) =>{
        //se usa para no dar el f5
        e.preventDefault();
        if(inputValue.trim().length>1){
        setCategories(cats =>[inputValue,...cats]);
        //se manda a vacio el input
        setInputValue('')
        }

    }
  return (
      <form onSubmit={handlerSubmit}>
     <input type="text" 
     value={inputValue} 
     onChange={handlerInputChange}
     
     />   
      </form>
  )
}
AddCategory.protoTypes = {
    setCategories : PropTypes.func.isRequired
}

export default AddCategory