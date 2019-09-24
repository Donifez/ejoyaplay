import React, { Component } from "react";
import "./scss/components/__signup.scss";

class Signup extends Component {
  render() {
    return (
      
<div className="sign-wrapper">
<form>
<div className="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
   <div>
    <label for="email"><b>Email</b></label>
    <div>
    <input type="text" placeholder="Enter Email" name="email" required/>
    </div>
   
    <label for="psw"><b>Password</b></label>
    <div>
    <input type="password" placeholder="Enter Password" name="psw" required/>
    </div>
   
    <label for="psw-repeat"><b>Confirm Password</b></label>
    <div>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
    </div>
    <div>
        <label for="psw-repeat"><b>Role</b></label>
        <div>
        <select>
            <option>Admin</option>
            <option>Super Admin</option>
            <option>User</option>
        </select>
        </div>
    </div>
    <div className="clearfix">
      <button type="submit" className="signupbtn">Sign Up</button>
    </div>
    </div>

</div>
</form>

</div> 
    );
  }
}
export default Signup;
