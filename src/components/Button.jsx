import React from 'react'

export default function button({text , manageNumber}) {
  return (
    <div>
        <button className='buttons1' onClick={() => manageNumber(text)}>
           {text}
        </button>
      
    </div>
  )
}
