function Footer(){
  return (
    <>
      <div className="footer">
        <div>
          <img src="/logo.png" alt="" />
        </div>
        <div>
            <ul type="none" id="item1">
              <li>Company</li><br/>
              <li><a href="/about" target="">About</a></li>
              <li><a href="/customersupport" target="">Contact Us</a></li>
              <li><a href="/customersupport" target="">Customer Support</a></li>
            </ul>
        </div>
        <div>
            <ul type="none" id="item1">
              <li>Legal</li><br/>
              <li><a href="">Terms and Conditions</a></li>
              <li><a href="">Privacy Policy</a></li>
            </ul>
        </div>
      </div>
      <div className="i2">
        <h3 style={{"color" : "white"}}> &copy; 2024 Find Movies</h3>
      </div>
    </>
  )
}

export default Footer;