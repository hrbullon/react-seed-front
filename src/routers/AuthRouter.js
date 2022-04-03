import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

import { Loader } from '../components/ui/Loader';
import { LoginScreen } from '../components/pages/auth/LoginScreen';

export const AuthRouter = () => {

    return (
        <>
        <Loader/>
        <Router>
            <Routes> 
                <Route 
                    exact 
                    path="/auth/login" 
                    element={ <LoginScreen/> }
                />
                <Route 
                    exact 
                    path="/auth/recovery" 
                    element={ <LoginScreen/> } 
                />
            </Routes>
        </Router>
        </>
    )
}
