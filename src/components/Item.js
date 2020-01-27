import React from 'react'
import PropTypes from 'prop-types'
import './Item.css'

const Item = ({ onClick, completed, text }) => (
  <li className='Item'
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

Item.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Item