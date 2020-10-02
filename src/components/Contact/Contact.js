import React from "react";
import '../../App.css'
import '../Contact/Contact.css'
import Footer from '../Footer/Footer';


export default function ContactUsForm(props) {
    return (
        <div className="bg-img">
            <h1>Contact Us</h1>
            <form>
                <div class='field' style={{ width: '400px', display: 'block', margin: '0 auto' }}>
                    <label htmlFor="firstName" class='label'>
                        First Name
                    </label>
                    <input class='input' type="text" name="firstName" placeholder='Type Your First Name Here' required onChange={props.handleInput} />
                </div>
                <div class='field' style={{ width: '400px', display: 'block', margin: '0 auto', marginTop: '20px' }}>
                    <label htmlFor="lastName" class='label'>
                        Last Name
                    </label>
                    <input class='input' type="text" name="lastName" placeholder='Type Your Last Name Here' required onChange={props.handleInput} />
                </div>
                
                <div class='field' style={{ width: '400px', display: 'block', margin: '0 auto', marginTop: '20px' }}>
                    <label htmlFor="email" class='label'>
                        Email
                    </label>
                    <input class='input' type="text" name="email" placeholder='Type Your Email Here' required onChange={props.handleInput} />
                </div>
                <div class='field' style={{ width: '400px', display: 'block', margin: '0 auto', marginTop: '20px' }}>
                    <label htmlFor="message" class='label'>
                        Send Feedback
                    </label>
                    <textarea class='input' id="subject" name="subject" placeholder="Type Your Message Here" required onChange={props.handleInput} style={{ width: '400px', height: '200px' }}>
                    </textarea>
                </div>
                <div class='control' style={{ width: '400px', display: 'block', margin: '0 auto', marginTop: '30px', marginBottom: '70px' }}>
                    <input class='button is-info' value="Submit" type="submit" onClick={props.handleInput} />
                </div>
            </form>
            
        </div>
        

    );
}