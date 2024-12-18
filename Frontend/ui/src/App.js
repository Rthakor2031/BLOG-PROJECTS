import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';
import './App.css'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BlogList />} />
                <Route path="/form" element={<BlogForm />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
