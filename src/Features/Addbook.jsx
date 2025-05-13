import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './BooksSlice';
import {useNavigate } from 'react-router-dom';

const Addbook = () => {
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const booksLength = useSelector(state => state.books.books.length)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const book = { id: booksLength + 1, title, author }
        dispatch(addBook(book))
        setTitle(" ")
        setAuthor(" ")
        navigate('/show-books', { replace: true })


    }
    return (
        <div>
            <Helmet>
                <title>Add Book | BooksView</title>
            </Helmet>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg space-y-6">
                <h2 className="text-2xl font-bold text-center text-gray-800">Add New Book</h2>

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
                    Add Book
                </button>
            </form>

        </div>
    );
};

export default Addbook;