import React from "react";
import "./About.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../store/ui";

function About() {
  const ABOUT_KEY = 1;
  const visible = useSelector((state) => state.ui.modals[ABOUT_KEY].visible);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleModal(ABOUT_KEY));
  };

  return (
    <>
        <div className={`about ${visible ? '' : 'hidden'}`}>
          <header>
            <i className="fa-regular fa-rectangle-xmark" onClick={handleClick}></i>
          </header>
          <div>
            Liam Noah Oliver Elijah James William Benjamin Lucas Henry Theodore
            Jack Levi Alexander Jackson Mateo Daniel Michael Mason Sebastian
            Ethan
          </div>
        </div>
    
    </>
  );
}

export default About;
