import React, { useState, useEffect } from 'react';
import Auth0Profile from '../Auth0Profile/Auth0Profile'
import {BrowserRouter as Router,Switch,Route,Link,useParams, useHistory } from "react-router-dom"



export default function Edit(props) {
    const { id } = useParams();
    const [fitness, updateFitness] = useState({
        username: '',
        email: '',
        
    });
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`https://strongbackend.herokuapp.com/fitnessescom${id}`);
                const data = await response.json();
                await updateFitness(data);
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const submission = { ...fitness };
            const response = await fetch(`https://strongbackend.herokuapp.com/fitnessescom${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(submission)
            });
            const data = await response.json();
            await updateFitness(data);
            props.history.push('/fitnesses');
        } catch (e) {
            console.error(e);
            console.log(fitness);
        }
    };
    const handleChange = event => {
        updateFitness({ ...fitness, [event.target.id]: event.target.value });
    };

    return (
        <div className="edit">
            <h1>Edit Profile</h1>
            {Object.keys(fitness).length > 0 ? (
                <form className="task-form" onSubmit={handleSubmit}>
                  
					Username:{' '}
                    <input
                        type="text"
                        id="username"
                        onChange={handleChange}
                        value={fitness.author}
                    /><br />
                    Email:{' '}
                    <input
                        type="text"
                        id="email"
                        onChange={handleChange}
                        value={fitness.email}
                    />
                    <br />
                    <button type="submit">Update</button>
                </form>
                
            ) : (
                    <Link to={'/'}> Go Back Home</Link>
                )}
            <Link to={'/'}> Go Back Home</Link>
            <br />
        </div>
    );
}