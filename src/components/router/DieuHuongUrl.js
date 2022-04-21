import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchAppBar from '../AppBar';
import Product from '../UICart Page/Product';
import BasicGrid from '../UIProduct/TestGird.js';
// import { Container } from './styles';

function DieuHuongURL() {
    return <>
        <Routes>
            <Route path="CardPage" element={<Product />} />
            <Route path="Product" element={<BasicGrid />} />
        </Routes>
    </>;
}

export default DieuHuongURL;

