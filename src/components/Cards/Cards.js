import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Let's Get Started!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='https://github.com/talltril/hello-world/blob/master/images/387A1223.jpg?raw=true'
                            text='Mr.Fitness helps people lose weight and lower the risk of some diseases.'
                            label='Amazing Setting'
                            path='/service'
                        />
                        <CardItem
                            src='https://github.com/talltril/hello-world/blob/master/images/Home_banner_29062017_053754.jpg?raw=true'
                            text='Mr.Fitness helps people lose weight and lower the risk of some diseases.'
                            label='Best Trainer'
                            path='/service'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='https://github.com/talltril/hello-world/blob/master/images/Jen_Fitness.jpg?raw=true'
                            text='Mr.Fitness helps people lose weight and lower the risk of some diseases.'
                            label='Diet Plans'
                            path='/service'
                        />
                        <CardItem
                            src='https://github.com/talltril/hello-world/blob/master/Images/o.jpg?raw=true'
                            text='Mr.Fitness helps people lose weight and lower the risk of some diseases.'
                            label='Staying Motivated!'
                            path='/products'
                        />
                        <CardItem
                            src='https://github.com/talltril/hello-world/blob/master/Images/thumb1.jpg?raw=true'
                            text='Mr.Fitness helps people lose weight and lower the risk of some diseases.'
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