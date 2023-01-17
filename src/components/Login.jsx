import React,{useState} from 'react'
import users from '../data';


function Login({setUserName}) {
    const [errMsgs,setErrMsgs] = useState({})
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      let enteredUser = e.target.userName.value;
      let enteredPwd = e.target.pwd.value;
  
      let user = users.find(elm => elm.userName === enteredUser);
      
      if(user){
        if(user.pwd === enteredPwd){
          setUserName(enteredUser)
        }else{
          setErrMsgs(prev=>({pwdErr:'password is incorrect !'}))
        }
      }else{
        setErrMsgs(prev=>({...prev,userNameErr:"user not found !"}))
      }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
          <div className='form-group'>
              <label htmlFor="userName">Username:</label>
              <input id='userName' name="userName" />
               <p className='errMsg'>{errMsgs.userNameErr && errMsgs.userNameErr}</p>
          </div>
          <div className='form-group'>
              <label htmlFor="pwd">Password:</label>
              <input id='pwd' name="pwd" type='password' />
               <p className='errMsg'>{errMsgs.pwdErr && errMsgs.pwdErr}</p>
          </div>
          <div className='form-group'>
              <button type='submit' className='loginBtn'>login</button>
          </div>
        </form>
    )
}

export default Login