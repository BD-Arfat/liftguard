import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LayOuts from '../LayOuts/LayOuts';
import Abouts from '../Pages/Abouts/Abouts';
import Services from '../Pages/Services/Services';
import Contact from '../Pages/Contact/Contact';
import NotFound from '../NotFound/NotFound';
import Home from '../Pages/Home/Home';

const Routers = createBrowserRouter([
    {
        path : '/',
        errorElement : <NotFound></NotFound>,
        element : <LayOuts/>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/Overview',
                element : <Abouts></Abouts>
            },
            {
                path : '/Services',
                element : <Services></Services>
            },
            {
                path : '/contact',
                element : <Contact></Contact>
            }
        ]
    }
])

export default Routers;