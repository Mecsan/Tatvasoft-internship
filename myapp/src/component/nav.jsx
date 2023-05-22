import { Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  
  return (
    <div className='nav'>
      <Button variant="contained" color='secondary'>
        <NavLink to='/'>Home</NavLink>
      </Button>

      <Button variant="contained" color='secondary'>
        <NavLink to='/products'>Products</NavLink>
      </Button>

      <Button variant="contained" color='secondary'>
        <NavLink to='/about'>About </NavLink>
      </Button>

    </div>
  )
}

export default Nav