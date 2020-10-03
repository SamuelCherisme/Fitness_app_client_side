import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Auth0Profile from '../Auth0Profile/Auth0Profile'
let endpoint = '/api';

export default function Edit(props) {
    const [newFitness, updateNewFitness] = useState({
        username: '',
        email: '',
    });

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('/api/' + props.match.params.id);
                const data = await response.json();
                data ? await updateNewFitness(data) : updateNewFitness({});
            } catch (e) {
                console.error(e);
            }
        })();
    }, []);

    const handleDelete = async event => {
        event.preventDefault();
        try {
            const response = await fetch('/api/' + props.match.params.id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            await updateNewFitness({});
        } catch (e) {
            console.error(e);
        }
    };
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const response = await fetch('/api/' + props.match.params.id, {
                method: 'PUT',
                body: JSON.stringify(newFitness),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            await updateNewFitness(data);
            await updateNewFitness({
                username: '',
                email: '',
            })
            props.history.push('/');
        } catch (e) {
            console.log(e);
        }
    };
    const handleChange = event => {
        updateNewFitness({ ...newFitness, [event.target.id]: event.target.value });
    };

    return (
        <div className="Page-wrapper">
            {Object.keys(newFitness).length > 0 ? (

                <div>
                    <h1>{newFitness.name} Edit Page.</h1>
                    <h2>
                        {newFitness.name}
                    </h2>
                </div>
            ) : (
                    <h1>Nothing found on {props.match.params.id}.</h1>
                )}

                <form className="task-form" onSubmit={handleSubmit}>
                    User Name:{' '}
                    <input
                        type="text"
                        name="username"
                        id="name"
                        onChange={handleDelete}
                        value={updateNewFitness.Auth0Profile}
                    />{' '}
                    <br />
					Email:{' '}
                    <input
                        type="text"
                        name="email"
                        id="title"
                        onChange={handleDelete}
                        value={updateNewFitness.Auth0Profile}
                    />
                    <br />
                    <button type="submit">Update </button>
                </form>
            ) : (
                   
                
                
        </div>
    );
}