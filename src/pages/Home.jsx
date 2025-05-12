import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | BooksView</title>
            </Helmet>
            <div className='mt-10'>
                <h2>Welcome to Home</h2>
            </div>
        </div>
    );
};

export default Home;
