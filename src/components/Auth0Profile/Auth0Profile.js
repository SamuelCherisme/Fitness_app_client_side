import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { Container, Row, Col } from "reactstrap";


import Logout from '../Auth0/AuthoLogout'

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    
    // const {loginWithRedirect} = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.nickname} />
                <h2>{user.nickname}</h2>
                <p>{user.email}</p>
                <Logout/>
                
            </div>
        )
    );
};

export default Profile;