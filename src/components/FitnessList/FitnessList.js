import React, { useState, useEffect } from "react";
import axios from "axios";

import FitnessShow from "../FitnessShow/FitnessShow";

const FitnessList = (props) => {
    const [fitness, setFitness] = useState([]);

    useEffect(() => {
        // Need to wrap this in an async function to use await inside:
        async function fetchData() {
            const response = await axios.get("");
            setFitness(response.data);
        }
        fetchData();
    }, [fitness]);

    const Fitness = fitness.map((fitness, i) => {
        return (
            <div key={i}>
                <FitnessShow fitness={fitness} isLoggedIn={props.isLoggedIn} />
            </div>
        );
    });

    return <div>{Fitness}</div>;
};

export default FitnessList;