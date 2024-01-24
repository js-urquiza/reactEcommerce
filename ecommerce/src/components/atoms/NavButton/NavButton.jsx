import React from 'react'
import './NavButton.css'
import { NavLink } from 'react-router-dom'

const NavButton = (props) => {
  return (
    <>
      <NavLink to={props.categories.path} className={'btn'}>{props.categories.title}</NavLink>
      {/* <button>{props.categories.name}</button> */}
    </>
  )
}

export default NavButton