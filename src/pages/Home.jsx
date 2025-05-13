import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | BooksView</title>
            </Helmet>

            <section className="mt-12 px-6 md:px-14">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                    {/* Left Content */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
                            Welcome to <span className="text-blue-600">BooksView</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8">
                            Explore, add, and manage your favorite books — all in one place.
                        </p>
                        <Link to='/show-books'> <button className="cursor-pointer bg-blue-600 hover:bg-blue-700 transition duration-300 px-6 py-3 text-white font-medium rounded-full shadow-md">
                            Explore Books
                        </button></Link>
                    </div>

                    {/* Right Image */}
                    <div className="md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80"
                            alt="Books"
                            className="w-full h-auto rounded-xl shadow-xl"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
