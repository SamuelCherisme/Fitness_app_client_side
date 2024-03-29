
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { ThemeProvider } from '@material-ui/core/styles';
import Switch from "react-bootstrap/esm/Switch";
import theme from './components/Blog/Theme'


ReactDOM.render(
    <React.StrictMode>
        <Router>
        <Switch>
    <ThemeProvider theme={theme}>
        
    </ThemeProvider>
    <Auth0Provider
        domain="dev-jutzh2bh.us.auth0.com"
        clientId="3vax1a85yKAodloOK5L0gh1nToPSkb5u"
        redirectUri={`window.location.origin}`}
        redirectUri={window.location.origin}>
                    <App />
    </Auth0Provider>
    </Switch>
    </Router>
    </React.StrictMode>,
    document.getElementById("root")
);