import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/contact" element={<ContactPage/>} />
        </Routes>
    );
};

export default Router;