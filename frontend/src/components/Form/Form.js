import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import "./Form.css";
import { createUser } from '../../store/user'
import { loginUser } from "../../store/sessionReducer";

function Form(props) {
  const type = props.location.state.type

  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser ] = useState({});

  useEffect (()=> {
      setUser({username, email, password});
  }, [username,email,password])

  const handleSubmit =  (e) => {
     e.preventDefault();
  if (type === 'Sign Up'){ 
     dispatch(createUser(user));
  }
  else {
    dispatch(loginUser(user));
  }

    setEmail('');
    setUser('');
    setPassword('');
    setUsername('');
  };

  return (
    <div className="user-form-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {(type === 'Sign Up') && 
        <input
          type="email"
          placeholder="your_email@internet.com..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /> }
        <input
          type="password"
          placeholder="password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input  type="submit" value={type} />
      </form>
    </div>
  );
}

export default Form;


// flow: make a local state of user with the user inputs (also local state)
//on submit make that user and check if credentials match aka
//fetch a get to back end to see if user? or to start a new session??
//both?
// if response ok then we useSelector to set the global state session to ...  the user?
// do we have a current user slice of state or is that in session??
// need to import correstpond action reaters into componeney
// diffeent if log in user vs sing up \user  vs whatever

//even theough they might go in to reducer the same 
// need to make user reducer which just has create and delete.
// may not need users lice of state if just need current user mno need look at profiles 
// ask about logger

//what does useParams return when not a wildcard?
//how to pass props through nav links
//what is location/history