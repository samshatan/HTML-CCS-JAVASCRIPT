function Header(){
  return(
    <div className="two"> 
      <img src="/logo.png" alt=""/>
      <a href="/">Home</a>
      <a href="/">Popular</a>
      
      <input type="text" placeholder="Search"/>
      <a href="/login" className="right">Login</a>
      <a href="/registration" className="right">Sign In</a>
    </div>
  )
} 
export default Header;