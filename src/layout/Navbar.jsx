import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import bookLogo from '../assets/booklogo.png';

const Navbar = () => {
    return (
        <header className="bg-white mt-4 max-w-6xl mx-auto border-b-2 border-gray-400">
            <Helmet>
                <title>Navbar | BooksView</title>
            </Helmet>

            <div className=" flex flex-col md:flex-row items-center justify-between p-4 gap-4">
                {/* Logo */}
                <Link to="/">
                    <img
                        className="w-16 h-16 object-contain"
                        src={bookLogo}
                        alt="BooksView Logo"
                    />
                </Link>

                {/* Navigation Links */}
                <nav className="flex flex-wrap gap-4 justify-center">
                    <Link
                        to="/"
                        className="px-4 py-2 text-blue-600 border-2 border-transparent hover:border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 rounded-md font-medium"
                    >
                        Home
                    </Link>
                    <Link
                        to="/show-books"
                        className="px-4 py-2 text-blue-600 border-2 border-transparent hover:border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 rounded-md font-medium"
                    >
                        Show Books
                    </Link>
                    <Link
                        to="/add-book"
                        className="px-4 py-2 text-blue-600 border-2 border-transparent hover:border-blue-600 hover:bg-blue-600 hover:text-white transition duration-300 rounded-md font-medium"
                    >
                        Add Book
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
