import React from 'react';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="home-search">
                <input type="text" />
            </div>
        </div>
    );
};

export default Home;