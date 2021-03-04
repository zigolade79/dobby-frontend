import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login } from "../pages/login";
import { CreateAccount } from "../pages/create-account";
import { NotFound } from "../404";
import { Header } from "../components/header";

export const LoggedOutRouter = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact><Login/></Route>
                <Route path="/create-account"><CreateAccount/></Route>
                <Route><NotFound /></Route>
            </Switch>
        </Router>
    )
}