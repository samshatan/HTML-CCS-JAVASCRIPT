import Header from "../Header";

function LoginPage(){
  return(
    <>
    <Header/>
    <div class="login-cont">
        <h2>Login</h2>
        <form id="login-form">
            <div class="input-group">
                <p>Username:</p>
                <input type="text" id="username"/>
            </div>
            <div class="input-group">
                <p>Password:</p>
                <input type="password" id="password"/>
            </div>
            <a href="/Main Body/try.html"><input type="button" id="login-btn" value="Login"/></a>
            <a href="/Registration Page/signin.html" class="link">Don't have an account? Sign up</a>
        </form>
    </div>
    </>
  )
}
export default LoginPage;