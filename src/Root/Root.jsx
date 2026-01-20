import React from 'react';
import Navbar from '../Fixed Component/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Fixed Component/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;