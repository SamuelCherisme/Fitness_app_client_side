import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Auth0Profile from '../Auth0Profile/Auth0Profile'
let endpoint = '/api';

export default function Show(props) {
    const [newFitness, updateNewFitness] = useState({});

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
    return (
        <div className="Page-wrapper">
            {Object.keys(newFitness).length > 0 ? (
                <div>
                    <h1> {newFitness.Auth0Profile}</h1>
                    <h2>{newFitness.Auth0Profile ? 'Bookmark' : "This wasn't Bookmarked yet"}</h2>
                    <h2>{newFitness.Auth0Profile}</h2>
                    <button onClick={handleDelete}>Delete {newFitness.Auth0Profile}</button>
                    <br />
                    <Link to={'/'}> Go Back Home </Link>
                    <Auth0Profile/>
                </div>
            ) : (
                    <Link to={'/'}>
                        {' '}
					'These are not the bookmarks you are looking for..... Go Back Home'
                    </Link>
                )}
        </div>
    );
}