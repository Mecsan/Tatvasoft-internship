import { Button, Switch } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav({ isDay, setday }) {

  return (
    <div className='nav'>
      <Button variant="contained" color={isDay ? 'secondary' : 'primary'}>
        <NavLink to='/'>Home</NavLink>
      </Button>

      <Button variant="contained" color={isDay ? 'secondary' : 'primary'}>
        <NavLink to='/products'>Products</NavLink>
      </Button>

      <Button variant="contained" color={isDay ? 'secondary' : 'primary'}>
        <NavLink to='/about'>About </NavLink>
      </Button>

      <Button variant="contained" color={isDay ? 'secondary' : 'primary'}>
        <NavLink to='/signup'>signup </NavLink>
      </Button>

      <Switch
        checked={!isDay}
        onChange={() => {
          setday(!isDay);
        }} />
    </div>
  )
}

export default Nav