import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NotFound } from "../404";
import { Header } from "../components/header";
import { useMe } from "../hooks/useMe";
import React from "react";
import { LandingPage } from "../pages/landing-page";
import { Tools } from "../pages/users/tools";


const userRoutes = [
  {
    path: "/tools",
    component: <Tools />,
  },
 
];

const commonRoutes = [
  {
    path: "/",
    component: <LandingPage />,
  },
];


export const LoggedInRouter = () => {
  const { data, loading, error } = useMe();

  if (!data || loading || error) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="font-medium text-xl tracking-wide">Loading...</span>
      </div>
    );
  }
  return (
    <Router>
      <Header />
      <Switch>
        {data.me.role === "Client" &&
          userRoutes.map((route) => (
            <Route exact key={route.path} path={route.path}>
              {route.component}
            </Route>
          ))}        
        {commonRoutes.map((route) => (
          <Route exact key={route.path} path={route.path}>
            {route.component}
          </Route>
        ))}
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};
