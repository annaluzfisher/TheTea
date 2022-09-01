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


