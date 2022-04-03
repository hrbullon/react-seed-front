import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

import { Aside } from './Aside'
import { Breadcrumbs } from './Breadcrumbs'
import { Footer } from './Footer'
import { Header } from './Header'
import { Loader } from '../ui/Loader'

import { MainScreen } from '../pages/dashboard/MainScreen';
import { LoginScreen } from '../pages/auth/LoginScreen';

export const Mainlayout = () => {

  return (
    <>
    {
    /*<!-- ============================================================== -->
        <!-- Preloader - style you can find in spinners.css -->
        <!-- ============================================================== -->*/
    }
    <Loader/>
    
    <div id="main-wrapper">
        {/* 
        <!-- ============================================================== -->
        <!-- Topbar header - style you can find in pages.scss -->
        <!-- ============================================================== -->*/ }
        <Header/>
        {/*<!-- ============================================================== -->
            <!-- Left Sidebar - style you can find in sidebar.scss  -->
            <!-- ============================================================== -->*/}
        <Aside/>
        {/*<!-- ============================================================== -->
        <!-- Page wrapper  -->
        <!-- ============================================================== -->*/}
        <div className="page-wrapper">
            {/*<!-- ============================================================== -->
            <!-- Container fluid  -->
            <!-- ============================================================== -->*/}
            <div className="container-fluid">
            {/*<!-- ============================================================== -->
                <!-- Bread crumb and right sidebar toggle -->
                <!-- ============================================================== -->*/}
            <Breadcrumbs/>
            
                <Routes> 
                    <Route 
                        path="/" 
                        element={ <MainScreen/> } 
                        isAuthenticated={ false }
                    />
                    <Route 
                        path="/test" 
                        element={ <LoginScreen/> } 
                        isAuthenticated={ false }
                    />
                </Routes>
              
            </div>
            {/*<!-- ============================================================== -->
            <!-- footer -->
            <!-- ============================================================== -->*/}
            <Footer/>
        </div>
    </div>
    </>
  )
}
