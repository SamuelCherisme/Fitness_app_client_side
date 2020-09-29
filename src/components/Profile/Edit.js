import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// let endpoint = '';

export default function Show(props) {
    const [Fitness, updateFitness] = useState({});
    let history = useHistory();
    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(`${endpoint}/${props.match.params.id}`);
                const data = await response.json();
                await updateFitness(data);
            } catch (e) {
                console.error(e);
            }
        })();
    });
    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const response = await fetch(`${endpoint}/${props.match.params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(...Fitness)
            });
            const data = await response.json();
            await updateFitness({ ...Fitness, data });
        } catch (error) {
            console.error(error);
        }
    };
    const deleteFitness = async event => {
        event.preventDefault();
        try {
            const response = await fetch(`${endpoint}/${props.match.params.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            await updateFitness({});
            console.log(response + 'was done')
            history.push('/home');
        } catch (error) {
            console.error(error);
        }
    };
    const handleChange = (event) => {
        updateFitness({ ...Fitness, [event.target.id]: event.target.value });
    };

    return (
        <div className="Page-wrapper">
            <div className="notification " style={{ fontSize: '25px' }}>
                <strong><h1> Edit Task </h1></strong>
            </div>
            {Object.keys(Fitness).length > 0 ? (
                <div>
                    <form onSubmit={handleSubmit} className="">
                        <div class="field">
                            <lable htmlFor="work" id="work" >Workout:</lable>
                            <p className="help"> Workout</p>
                            <input
                                type="text"
                                name="work"
                                id="work"
                                value={Fitness.work}
                                onChange={handleChange}
                            />
                        </div>
                        <div class="field">
                            <lable htmlFor="exercise" id="exercise" >Exercise:</lable>
                            <p className="help">Exercise</p>
                            <input
                                type="text"
                                name="exercise"
                                id="exercise"
                                value={Fitness.exercise}
                                onChange={handleChange}
                            />
                        </div>
                        <div class="field">
                            <lable htmlFor="staying" id="staying" >Staying Motivated</lable>
                            <p className="help">Motivated</p>
                            <input
                                type="text"
                                name="staying"
                                id="staying"
                                value={Fitness.staying}
                                onChange={handleChange}
                            />
                        </div>
                        <div class="field">
                            <lable htmlFor="healthy" id="healthy" >Staying Healthy</lable>
                            <p className="help">Healthy</p>
                            <input
                                type="text"
                                name="healthy"
                                id="healthy"
                                value={Fitness.healthy}
                                onChange={handleChange}
                            />
                        </div>
                        <div class="field">
                            <lable htmlFor="determined" id="determined" >Staying Determined:</lable>
                            <p className="help">Determined</p>
                            <input
                                type="text"
                                name="determined"
                                id="determined"
                                value={Fitness.determined}
                                onChange={handleChange}
                            />
                        </div>
                        <div class="control">
                            <button type="submit" className="button-update">Update</button>
                        </div>
                    </form>
                    <p class="control">
                        <button className="button is-danger" style={{ marginTop: '15px' }} onClick={deleteFitness}>
                            Delete
                    </button>
                    </p>
                    <div>
                        <a className="button is-info is-light" href="/home" style={{ marginTop: '12px' }}>Back</a>
                    </div>
                </div>
            ) : (
                    <h1>Nothing found on {props.match.params.id}.</h1>
                )
            }



        </div >
    )
}