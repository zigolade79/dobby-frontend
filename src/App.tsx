import { useReactiveVar } from '@apollo/client';
import React from 'react';
import { isLoggedInvar } from './apollo';
import { LoggedInRouter } from './routers/logged-in-router';
import { LoggedOutRouter } from './routers/logged-out-router';


function App() {
  const isLoggedIn = useReactiveVar(isLoggedInvar);
 
  return isLoggedIn? <LoggedInRouter />:<LoggedOutRouter />
}

export default App;
