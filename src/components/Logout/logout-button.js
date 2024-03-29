import React from "react";


export default function LogOut(props) {
    let user = JSON.parse(localStorage.getItem('user'));

    return (
        <div className="navbar-end" style={{ marginLeft: '360px' }}>
            <div className="navbar-item auth">
                <div className="buttons">
                    {localStorage.length > 0 && <><strong>Welcome Back {user.name}!	&nbsp; &nbsp; </strong><a href="/account" className="button is-link is-light">Account &nbsp; &nbsp; </a></>}
                    <form>
                        <div>
                            <input class='button is-info' value="Log Out" type="submit" onClick={props.handleLogOut} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}