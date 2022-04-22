import React from 'react';
import { Route, Routes } from "react-router-dom";
import Product from '../UICart Page/Product';
import Main from '../UICheckOut/Main';
import UIMyProfile from '../UIMyProfile/Main';
import BasicGrid from '../UIProduct/TestGird.js';
import MainReturn from '../UIReturns/MainReturn';
// import { Container } from './styles';

function DieuHuongURL() {
    return <>
        <Routes>
            <Route path="CardPage" element={<Product />} />
            <Route path="Product" element={<BasicGrid />} />
            <Route path="MyProfile" element={<UIMyProfile />} />
            <Route path="Main" element={<Main/>} />
            <Route path="MainReturn" element={<MainReturn/>} />
        </Routes>
    </>;
}

export default DieuHuongURL;

