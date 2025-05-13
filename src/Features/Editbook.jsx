import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { updateBook } from './BooksSlice';

const Editbook = () => {
    const location = useLocation()
    const dispatch = useDispatch();

    const [id, setId] = useState(location.state.id);
    const [author, setAuthor] = useState(location.state.author);
    const [title, setTitle] = useState(location.state.title);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateBook({ id, author, title }))
        setId(" ")
        setAuthor(" ")
        setTitle(" ")

    }

    return (
        <div>
            <Helmet>
                <title>Edit Book | BooksView</title>
            </Helmet>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg space-y-6">
                <h2 className="text-2xl font-bold text-center text-gray-800">Update Book</h2>

                <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-medium">Id</label>
                    <input
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                        placeholder="Enter Book Id"
                        name="title"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />

                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-medium">Title</label>
                    <input
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                        placeholder="Enter Book Title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-gray-700 font-medium">Author</label>
                    <input
                        className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        type="text"
                        placeholder="Enter Book Author"
                        name="author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-md transition duration-300">
                    Update Book
                </button>
            </form>

        </div>
    );
};

export default Editbook;