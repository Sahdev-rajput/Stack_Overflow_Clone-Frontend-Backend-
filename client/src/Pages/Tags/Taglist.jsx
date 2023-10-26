import React from 'react'
import "./Tags.css"
const Taglist = ({tag}) => {
  return (
    <div className='tags'>
        <h4>{tag.tagName}</h4>
        <p>{tag.tagDesc}</p>
    </div>
  )
}

export default Taglist