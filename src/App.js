import { useEffect } from 'react';
import './App.css';

import { AppRouter } from './routers/AppRouter';
import { AuthRouter } from './routers/AuthRouter';

function App() {

  const isAuthenticated = true

  useEffect(() => {
      if(!isAuthenticated && !/auth/.test(window.location.pathname)){
        window.location.href = window.location.origin + "/auth/login"
      }
  }, [])
  
  return (
    <>
      { isAuthenticated && 
        <AppRouter isAuthenticated={isAuthenticated}/>
      }
      { !isAuthenticated && 
        <AuthRouter isAuthenticated={isAuthenticated}/>
      }  
    </>
  );
}

export default App;
