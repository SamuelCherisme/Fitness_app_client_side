import React from 'react';
import '../../App.css';
import  Button  from '../Button/Button';
import './HeroSection.css';


function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/' autoPlay loop muted />
            <h1>Stay Strong with Strong Bodies!</h1>
            <p>What are you waiting for?</p>
            
            <div className='hero-btns'>
                <a href='https://www.freecodecamp.org/'><Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                
                
                > GET STARTED!
                     
                </Button>
                
                </a>

                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>

                {/* <a href='https://www.freecodecamp.org/'><button>Link To freeCodeCamp</button></a> */}
            </div>
        </div>
    );
}

export default HeroSection;