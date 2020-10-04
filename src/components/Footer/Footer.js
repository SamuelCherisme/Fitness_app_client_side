import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure!
        </p>
                <p className='footer-subscription-text'>
                    You can unsubscribe at any time.
        </p>
                <div className='input-areas'>
                    <form>
                        <input
                            className='footer-input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                       
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/contact'>Contact</Link>
                        
                    </div>
                </div>
                <div className='footer-link-wrapper'>

                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <a href="https://www.instagram.com/strongbodiez/">Instagram <i class='fab fa-instagram' /></a>
                        <a href="https://www.facebook.com/Strong-Bodiez-1448317625419756/">Facebook <i class='fab fa-facebook-f' /></a>
                        <a href="https://www.youtube.com/channel/UCujn4L6rOy53RWlagPtPUww">Youtube  <i class='fab fa-youtube' /></a>
                        <a href="https://twitter.com/StrongBodiezFL">Twitter <i class='fab fa-twitter' /></a>
                    </div>
                </div>
            </div>
            <section class='social-media'>
                <div class='social-media-wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Strong Bodies
              <i class='fab fa-typo3' />
                        </Link>
                    </div>
                    <small class='website-rights'>Copyright © Strong Bodiez by Jennifer Smith</small>
                    <div class='social-icons'>
                        

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;