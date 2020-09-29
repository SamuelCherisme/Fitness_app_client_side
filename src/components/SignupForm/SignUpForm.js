import React from "react";
import "./SignupForm.css";


export default function SignUpForm(props) {
    return (
        <div>
            <h2 style={{ textAlign: 'center', fontSize: '30px', marginTop: '30px', marginBottom: '30px' }}>Sign Up</h2>

            <form>
                <div class='field' style={{ width: '400px', display: 'block', margin: '0 auto' }}>
                    <label htmlFor="firstName" class='label'>First Name</label>
                    <input class='input' type="text" name="firstName" placeholder='Type Your First Name Here' required onChange={props.handleInput} />
                </div>
               
                <div class='field' style={{ width: '400px', display: 'block', margin: '0 auto', marginTop: '20px' }}>
                    <label htmlFor="lastName" class='label'>Last Name</label>
                    <input class='input' type="text" name="lastName" placeholder='Type Your Last Name Here' required onChange={props.handleInput} />
                </div>
               
            
                <div class='field' style={{ width: '400px', display: 'block', margin: '0 auto', marginTop: '20px' }}>
                    <label htmlFor="email" class='label'>Email</label>
                    <input class='input' type="email" name="email" placeholder='Type Your Email Here' required onChange={props.handleInput} />
                </div>
                
                <div class='field' style={{ width: '400px', display: 'block', margin: '0 auto', marginTop: '20px' }}>
                    <label htmlFor="password" class='label'>Password</label>
                    <input class='input' type="password" name="password" placeholder='Type Your Password Here' required onChange={props.handleInput} />
                </div>
               
                <div class='field' style={{ width: '400px', display: 'block', margin: '0 auto', marginTop: '20px' }}>
                    <label htmlFor="confirm_password" class='label'>Confirm Password</label>
                    <input class='input' type="password" name="confirm_password" placeholder='Type Your confirm_password Here' required onChange={props.handleInput} />
                </div>
              
                <div class='control' style={{ width: '400px', display: 'block', margin: '0 auto', marginTop: '30px', marginBottom: '30px' }}>
                    <input class='button is-info' value="Submit" type="submit" onClick={props.handleSignUp} />
                </div>
            </form>
        </div>
    );
}
