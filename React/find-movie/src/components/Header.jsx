function Header(){
  const image = process.env.PUBLIC_URL + "/logo.png";
  return(
    <div class="two">
      <img src={image} alt=""/>
      <a href="/Main Body/try.html">Home</a>
      <a href="#popular">Popular</a>
      
      <input type="text" placeholder="Search"/>
      <a href="/Login Page/login_page.html" class="right">Login</a>
      <a href="/Registration Page/signin.html" class="right">Sign In</a>
  </div>
  )
}
export default Header;