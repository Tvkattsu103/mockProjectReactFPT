import React from 'react';
import BasicGrid from './Gird';
import MyProduct from './MyProduct';
import ResponsiveGrid from './TrangThai';
import Header from '../UI/Header'

// import { Container } from './styles';

function Main() {
    return <>
     <Header />
        <ResponsiveGrid />
        <BasicGrid />
        <hr style={{ width: '1500px' }} />
        <MyProduct/>
    </>
}

export default Main
