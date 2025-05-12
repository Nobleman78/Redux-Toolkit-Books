import React from 'react';
import { Helmet } from 'react-helmet-async';

const Error = () => {
    return (
        <div>
            <Helmet>
                <title>Error | BooksView</title>
            </Helmet>
            <h2 className='mt-10 text-2xl'> Error Page</h2>
        </div>
    );
};

export default Error;