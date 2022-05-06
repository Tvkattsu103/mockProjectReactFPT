import React from 'react';

// import { Container } from './styles';

function MainConcept1() {
    return <>
        <h2>Shipping Address</h2>
        <h3>Yvone Weng</h3>
        <p style={{ color: 'red' }}>Change shipping address</p>
        <h2>Shipping Option</h2>
        <br/>
        <div>
            <input type="radio" selected />
            &nbsp; <label htmlFor="html">Free 2-day Express Shipping</label><br />
        </div>
        <br/>
        <i>Orders will arrive by Dec.24</i>
    </>;
}

export default MainConcept1;