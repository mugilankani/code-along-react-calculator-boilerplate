import React from 'react'

export default function Operation({text, manageOperation}) {
  return (
    <div>
      <button className='buttons1' onClick={() => manageOperation(text)}>{text}</button>
    </div>
  )
}
