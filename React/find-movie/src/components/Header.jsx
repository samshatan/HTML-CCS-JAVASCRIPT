import { useState } from "react";

function Header(){

  const [regHandle, setRegHandle] = useState('Sign In');

  function registrationHandle(){
    regHandle === 'Sign In' ? setRegHandle("Login") : setRegHandle("Sign In");
  }

  return(
    <div className="two"> 
      <img src="/logo.png" alt=""/>
      <a href="/">Home</a>
      <a href="/">Popular</a>
      {/* <h1>&diamonds;</h1> */}
      
      <input type="text" placeholder="Search"/>
      <a href="/login" className="right">Login</a>
      <a href="/registration" className="right">Sign In</a>
      {/* <button onClick={registrationHandle}>{regHandle}</button> */}
    </div>
  )
} 
export default Header;