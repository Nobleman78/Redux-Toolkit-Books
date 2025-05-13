import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBook } from './BooksSlice';

const Showbooks = () => {
    const book = useSelector(state => state.books.books)
    const dispatch = useDispatch()
    const handleDeleteBook = (id) => {
        dispatch(deleteBook(id))
    }

    return (
        <div className='px-14'>
            <Helmet>
                <title>ShowBooks | BooksView</title>
            </Helmet>

            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden mt-10">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-6 py-3 text-sm font-medium text-gray-700">ID</th>
                        <th className="px-6 py-3 text-sm font-medium text-gray-700">Title</th>
                        <th className="px-6 py-3 text-sm font-medium text-gray-700">Author</th>
                        <th className="px-6 py-3 text-sm font-medium text-gray-700">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        book.map(({ id, title, author }) => (
                            <tr key={id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4">{id}</td>
                                <td className="px-6 py-4">{title}</td>
                                <td className="px-6 py-4">{author}</td>
                                <td className="px-6 py-4 space-x-2">
                                    <Link to='/edit-book' state={{ id, title, author }}>
                                        <button className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600">Edit</button>
                                    </Link>
                                    <button onClick={() => handleDeleteBook(id)} className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Showbooks;