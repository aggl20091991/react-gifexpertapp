import React from 'react'
import PropTypes from 'prop-types';

function GrifGridItem({id,title,url}) {
  return (
    <div className="card animate__animated animate__bounce">
        <img src={url} alt={title}/>
        <p>{title}</p>
    
    </div>
  )
}
GrifGridItem.prototypes = {
    title:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired
}

export default GrifGridItem