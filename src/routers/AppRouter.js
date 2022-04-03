import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

/***********UI Components *************/
import { Loader } from '../components/ui/Loader';
import { Aside } from '../components/layouts/Aside';
import { Breadcrumbs } from '../components/layouts/Breadcrumbs';
import { Footer } from '../components/layouts/Footer';
import { Header } from '../components/layouts/Header';

import { MainScreen } from '../components/pages/dashboard/MainScreen';

export const AppRouter = () => {

    return (
        <>
        <Loader/>
        <div id="main-wrapper">
            <Header/>
            <Aside/>
            <div className="page-wrapper">
                <div className="container-fluid">
                    {/* <Breadcrumbs/> */}
                    <Router>
                        <Routes> 
                            <Route 
                                path="/" 
                                element={ <MainScreen/> } 
                            />
                        </Routes>
                    </Router>
                </div>
                <Footer/>
            </div>
        </div>
        </>
    )
}
