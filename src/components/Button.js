import React from 'react'

function Button({ button, inputs }) {
  return (
    <button type='submit'
      onClick={() => { Object.values(button)[0](inputs[0], inputs[1]) }}>{Object.keys(button)}</button>

  )
}

export default Button
