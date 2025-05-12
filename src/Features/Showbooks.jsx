import React from 'react';
import { Helmet } from 'react-helmet-async';

const Showbooks = () => {
    return (
        <div>
            <Helmet>
                <title>ShowBooks | BooksView</title>
            </Helmet>
            <h2 className='mt-10'> Show books</h2>
        </div>
    );
};

export default Showbooks;