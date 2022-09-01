import React from 'react'
import "./Share.css";
import { useState } from 'react'
import { createShare } from "../../store/share"
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux'

function Share() {
  const dispatch = useDispatch();
  const [errorMessages, setErrorMessages] = useState({});
  const [user_id, setUserId] = useState(1) //should be getting the user id from session. perhaps in controller
  const [content, setContent ] = useState('');
  // const [share, setShare ] = useState({});
  const history = useHistory();

  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    const share = {
      share:  {
      user_id: user_id,
      content: content,}
    };
       
    let newShare;
    try {
      newShare = await  dispatch(createShare(share)) // no need to add share because it's included in create share?
    } catch (error) {
      setErrorMessages({ overall: error.errors})
    }
    if (newShare){
      setErrorMessages({});
      history.push(`share/${share.id}`);
    }
  }

  return (
    <div className='form-wrapper'>
      <form className='form' onSubmit={handleSubmit}>
        <label>Spill the tea ...</label>
        <textarea type="textarea" placeholder="Share a thought, secret or a short story..."onChange={(e) => setContent(e.target.value)}/>
       <input type="submit" name="" value="Give us the Tea!"/>
      </form>
    </div>
  )
}

export default Share