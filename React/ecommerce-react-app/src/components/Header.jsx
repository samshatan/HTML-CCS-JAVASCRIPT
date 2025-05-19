import { useEffect, useState } from "react";

function Header() {

  // let buttonvalue = "Login";
  const [buttonvalue, setBtnValue] = useState('Login');

  function handleButton(){
    buttonvalue === 'Login' ? setBtnValue('Logout') : setBtnValue('Login');
  }

  const [buttonvalue2, setBtnValue2] = useState('2nd Button');
  function handleButton2(){
    buttonvalue2 === '2nd Button' ? setBtnValue2('Hello') : setBtnValue2('2nd Button');
  }

  console.log("Hello I am inside header component");

  useEffect(() =>{
    console.log("Hello I m inside the useEffect()");
  },[buttonvalue, buttonvalue2]);

  useEffect(() =>{
    console.log("Hello I m inside the useEffect() wihtout dependency");
  },[]);

  return (
      <header>
    <div className="logo">E-commerce App</div>

    <div>
      <nav>
        <ul className="menu">
          <li className="menu-item"><a href="/">Home</a></li>
          <li className="menu-item"><a href="/men">Men</a></li>
          <li className="menu-item"><a href="/women">Women</a></li>
          <li className="menu-item"><a href="/kids">Kids</a></li>
          <li className="menu-item"><a href="/accesories">Accessories</a></li>
          <li className="menu-item"><a href="/sale">Sale</a></li>
        </ul>
      </nav>
    </div>

    <div className="header-right">
      <input type="search" placeholder="Search for products..." />
      <button onClick={handleButton} className="login-btn">{buttonvalue}</button>
      <button onClick={handleButton2} className="login-btn">{buttonvalue2}</button>
    </div>
  </header>
  )
}
export default Header;