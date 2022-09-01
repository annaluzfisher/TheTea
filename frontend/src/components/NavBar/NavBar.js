import React from 'react'
import "./NavBar.css"
import { NavLink } from "react-router-dom"
import { removeCurrentUser } from '../../store/sessionReducer';
import { useSelector, useDispatch } from 'react-redux'
import About from '../About/About'
import { toggleModal } from '../../store/ui';


function NavBar() {
  const dispatch = useDispatch();
  let buttonName;
  const currentUser = useSelector((state)=> state.session.user)
  if (!currentUser) { 
    buttonName = 'Log In'
  } else {
    buttonName = 'Log Out'
  }

 
  const handleClick = (e) => {

    dispatch(toggleModal(e.target.id))

  }
  return (
    <>
      <nav className="NavBar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Share">Share</NavLink>
        <div id='1' onClick={handleClick}>About</div>
        {buttonName === "Log In" && (
          <NavLink to={{ pathname: "/Form", state: { type: buttonName } }}>
            <button className="button">{buttonName}</button>
          </NavLink>
        )}
        {buttonName === "Log Out" && (
          <button className="button"
          onClick={()=>dispatch(removeCurrentUser(currentUser))}>{buttonName}</button>
        )}
      </nav>

   
    
    </>
  );
}

export default NavBar

