import React from "react";
import { getRandomShare } from "../../store/share";
import './Home.css'
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const share = useSelector((state) => state.share);

  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch(getRandomShare());
  };

  return (
    <div className="home">
      <button onClick={handleClick}>Generate Random Tea</button>
      {share && <div className="random-share">{share.content}</div>}
    </div>
  );
}

export default Home;
