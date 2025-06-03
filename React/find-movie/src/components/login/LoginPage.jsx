import Header from "../Header";

function LoginPage(){
  return(
    <div className="backgrounding">
    <Header/>
    <div class="login-contl">
        <h2>Login</h2>
        <form id="login-forml">
            <div class="input-groupl">
                <p>Username:</p>
                <input type="text" id="username"/>
            </div>
            <div class="input-groupl">
                <p>Password:</p>
                <input type="password" id="password"/>
            </div>
            <a href="/"><input type="button" id="login-btnl" value="Login"/></a>
            <a href="/registration" class="linkl">Don't have an account? Sign up</a>
        </form>
    </div>
    </div>
  )
}
export default LoginPage;