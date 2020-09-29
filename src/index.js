
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import Switch from "react-bootstrap/esm/Switch";

ReactDOM.render(
    <React.StrictMode>
        <Router>
        <Switch>
    <Auth0Provider
        domain="dev-jutzh2bh.us.auth0.com"
        clientId="3vax1a85yKAodloOK5L0gh1nToPSkb5u"
        redirectUri={window.location.origin}>
     <App />
    </Auth0Provider>,
    </Switch>
    </Router>
    </React.StrictMode>,
    document.getElementById("root")
);