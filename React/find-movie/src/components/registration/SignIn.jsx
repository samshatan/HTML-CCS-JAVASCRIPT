import Header from "../Header";

function SignIn(){
  return (
    <div className="backgrounding">
    <Header/>
    <div class="register-cont">
        <h2>Register</h2>
        <form id="register-form">
            <div class="input-group">
                <p>Username:</p>
                <input type="text" id="username"/>
            </div>
            <div class="input-group">
                <p>Email:</p>
                <input type="email" id="email" />
            </div>
            <div class="input-group">
                <p>Date of Birth:</p>
                <input type="date" id="dob"/>
            </div>
            <div class="input-group">
                <p>Password:</p>
                <input type="password" id="password"/>
            </div>
            <div class="input-group">
                <p>Confirm Password:</p>
                <input type="password" id="confirm-password"/>
            </div>
            <a href="/"><input type="button" id="register-btn" value="Register" onclick='valform()'/></a>
            <a href="/login" class="link">Already have an account? Login</a>
        </form>
    </div>
    </div>
  )
}

export default SignIn;