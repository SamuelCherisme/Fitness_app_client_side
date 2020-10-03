import React from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the Adventure newsletter to receive our best Fitness deals
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
                        <h2>About Us</h2>
                        <Link to='/sign-up'>Sign Up Now!</Link>
                        <Link to='/'>Staying Healty Tips</Link>
                        <Link to='/'>About Mr.Fitness</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                   
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/https://www.instagram.com/strongbodiez/'>Instagram</Link>
                        <Link to='/https://www.facebook.com/Strong-Bodiez-1448317625419756/'>Facebook</Link>
                        <Link to='/https://www.youtube.com/channel/UCujn4L6rOy53RWlagPtPUww'>Youtube</Link>
                        <Link to='/https://twitter.com/StrongBodiezFL'>Twitter</Link>
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
                        <Link
                            class='social-icon-link facebook'
                            to='/https://www.facebook.com/Strong-Bodiez-1448317625419756/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i class='fab fa-facebook-f' />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='https://www.instagram.com/strongbodiez/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i class='fab fa-instagram' />
                        </Link>
                        <Link
                            
                        >
                            <i class='fab fa-youtube' />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/https://twitter.com/StrongBodiezFL'
                            target='/https://twitter.com/StrongBodiezFL'
                            aria-label='Twitter'
                        >
                            <i class='fab fa-twitter' />
                        </Link>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;