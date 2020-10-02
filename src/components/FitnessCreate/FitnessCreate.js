import React, { useState } from 'react';
import axios from 'axios'


function FitnessCreate(props) {
    const [fitnessState, setFitnessState] = useState({
        username: "",
        workout: "",
        routine: "",
        image: "",
    });

    const handleFitnessInput = (event) => {
        setFitnessState({ ...fitnessState, [event.target.name]: event.target.value });
    };

    const handleFitnessSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("", {
                username: fitnessState.username,
                workout: fitnessState.workout,
                routine: fitnessState.routine,
                image: fitnessState.image
            });
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <h2>Add to Favorites</h2>
            <form>
                <div>
                    <label htmlFor="username">
                        Your Username:
                    </label>
                    <input type="text" name="username" onChange={handleFitnessInput} />
                </div>
                <div>
                    <label htmlFor="artist">
                        Workout:
                    </label>
                    <input type="text" name="artist" onChange={handleFitnessInput} />
                </div>
                <div>
                    <label htmlFor="track">
                        Routine:
                    </label>
                    <input type="text" name="track" onChange={handleFitnessInput} />
                </div>
                <div>
                    <label htmlFor="image">
                        Workout Image:
                    </label>
                    <input type="text" name="image" onChange={handleFitnessInput} />
                </div>
                <input value="Submit" type="submit" onClick={handleFitnessSubmit} />
            </form>
        </div>
    );
}

export default FitnessCreate;