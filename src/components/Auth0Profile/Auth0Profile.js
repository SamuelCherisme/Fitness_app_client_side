import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { Container, Row, Col } from "reactstrap";
import '../Auth0Profile/Auth0Profile.css'
import Edit from '../Auth0Profile/Edit'
import Logout from '../Auth0/AuthoLogout'

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    // const {loginWithRedirect} = useAuth0();
    if (isLoading) {
        return <div>Loading ...</div>;
    }

return (
isAuthenticated && (
     <div class="profile-card">
        <div class="card-header">
            <div class="pic">
                <img src={user.picture} alt={user.nickname} />
                    </div>
                         <div class="name">
                            <h2>{user.email}</h2>
                            </div>
                            <div class="desc">
                            <h2>{user.nickname}</h2>
                            </div>
                            <div class="sm">
                            </div>
                            <a href="/" class="contact-btn">Home</a>
                        </div>
                        <div class="card-footer">
                            <div class="numbers">
                                <div class="item">
                                   
        </div>
                                <div class="border"></div>
                                <div class="item">
                                    
        </div>
                                <div class="border"></div>
                                <div class="item">
                                
        </div> 
                            </div>
                            

                            {/* <Edit/> */}
                            <Logout/>
                        </div>
                    </div>
        )
    );
};

export default Profile;