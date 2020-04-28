import React from 'react';
import Header from './Header.js';

export default props => {
    return (
        <div>
            <Header />
            {props.children}
        </div>
    );
};