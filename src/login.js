import React, { Component } from "react";
import "./scss/components/__login.scss";

class Login extends Component {
  render() {
    return (
      
<div className="sign-wrapper">
<form>
<div className="container">
    <h1>Login</h1>

   <div>
    <label for="email"><b>Email</b></label>
    <div>
    <input type="text" placeholder="Enter Email" name="email" required/>
    </div>
   
    <label for="psw"><b>Password</b></label>
    <div>
    <input type="password" placeholder="Enter Password" name="psw" required/>
    </div>
   
    </div>
    <div className="clearfix">
      <button type="submit" className="loginbtn">Sign Up</button>
    </div>
    </div>


</form>

</div> 
    );
  }
}
export default Login;
