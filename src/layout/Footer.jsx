import React from 'react';
import { Helmet } from 'react-helmet-async';

const Footer = () => {
    return (
        <div className='px-14'>
            <Helmet>
                <title>Footer | BooksView</title>
            </Helmet>
            <h2 className='mt-20 bg-gray-200 px-5 py-5'>Designed By Jesmin Chakma @2025</h2>
        </div>
    );
};

export default Footer;