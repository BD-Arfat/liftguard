import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shear/Navbar/Navbar';
import Footer from '../Shear/Footer/Footer';

const LayOuts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default LayOuts;