import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Let's Get Started!</h1>
            
            <br/>
           
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='https://github.com/talltril/hello-world/blob/master/images/387A1223.jpg?raw=true'
                            text='Discover The “Secret” 28-Day Formula For Fat Loss, A Flat Stomach, Endless Energy, And A Body You Are Proud To Show Off This Summer!'
                            label='About'
                            path='/about'
                        />
                        <CardItem
                            src='https://github.com/talltril/hello-world/blob/master/images/Home_banner_29062017_053754.jpg?raw=true'
                            text='Get Access To Strong Bodiez’s Proven Formula For Fat Loss Success That Gets You Results In Just 3 Short Workouts Each Week Without Starving Yourself Or Performing Endless Hours Of Useless Exercise!'
                            label='Contact Us'
                            path='/contact-us'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='https://github.com/talltril/hello-world/blob/master/images/Jen_Fitness.jpg?raw=true'
                            text='Do you want the secret to feeling strong and confident without all the hassle and frustration of trying to sort through what works and what is a waste of time?'
                            label='Blog'
                            path='/blog'
                        />
                        <CardItem
                            src='https://github.com/talltril/hello-world/blob/master/Images/o.jpg?raw=true'
                            text='We want you to experience feeling the BEST you ever have right in time for when it matters most! '
                            label='Testimonals'
                            path='/testimonals'
                        />
                        <CardItem
                            src='https://github.com/talltril/hello-world/blob/master/Images/thumb1.jpg?raw=true'
                            text='Strong Bodies helps people lose weight and lower the risk of some diseases.'
                            label='Stay Fit!'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;