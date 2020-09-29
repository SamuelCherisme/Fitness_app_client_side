import React from "react";
import '../../App.css'
import '../Contact/Contact.css'


export default function ContactUsForm(props) {
    return (
        <div>
            <div className="slogan is-family-primary has-text-centered has-text-weight-bold" style={{ fontSize: '20px', marginBottom: '30' }}>
                <div class="container is-fluid" style={{ width: '50%' }}>
                    <div class="notification" style={{ fontSize: '25px', marginBottom: '30px' }}>
                        <h1 className="contact">
                            <strong>Contact Form</strong>
                        </h1>
                        <h1 style={{ fontSize: '20px', marginTop: '20px' }}>
                                        Email is the best way to stay in contact with Mr.Fitness!
                        </h1>
                    </div>
                </div>
            </div>
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