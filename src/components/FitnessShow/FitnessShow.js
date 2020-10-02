import React from "react";
// import "./FitnessShow.css";

function FitnessShow(props) {
    const { username, workout, routine, image, } = props.fitness;
    return (
        <div className="fitness-preview">
            <img src={image} alt={workout} className="fitness-image" />
            <h3>{}</h3>
            {props.isLoggedIn ? <h4> {username} </h4> : ""}
            {props.isLoggedIn ? <h4> {workout} </h4> : ""}
            {props.isLoggedIn ? <h4> {routine} </h4> : ""}
            {props.isLoggedIn ? <h4> {image} </h4> : ""}
        </div>
    );
};

export default FitnessShow;