import React from 'react';
import BasicGrid from './Gird';
import MyProduct from './MyProduct';
import ResponsiveGrid from './TrangThai';

// import { Container } from './styles';

function Main() {
    return <>
        <ResponsiveGrid />
        <BasicGrid />
        <hr style={{ width: '1500px' }} />
        <MyProduct/>
    </>
}

export default Main
