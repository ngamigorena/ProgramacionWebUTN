import React from 'react'
import './buttonList.css'

export const ButtonList = ({properties, filterProperties}) => {
  return (
    <div className='properties'>
        {properties.map(property =>(
            <button
                type='button'
                className='btnItemList'
                onClick={()=> filterProperties(property)}
                key={property}
            >
                {property}
            </button>
        ))}


    </div>
  )
}
