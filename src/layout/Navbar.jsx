import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Navbar | BooksView
                </title>
            </Helmet>
            <nav className='sm:max-w-7xl mx-auto text-lg flex gap-4 items-center justify-center bg-white shadow-md rounded-xl p-4 mt-4'>
                <Link className='px-4 py-2 text-blue-600 border-2 border-transparent hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 rounded-md font-medium' to='/'> Home</Link>
                <Link className='px-4 py-2 text-blue-600 border-2 border-transparent hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 rounded-md font-medium' to='/show-books'>Show Books</Link>
                <Link className='px-4 py-2 text-blue-600 border-2 border-transparent hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300 rounded-md font-medium' to='/add-book'>Add Book    </Link>
            </nav>
        </div>
    );
};

export default Navbar;
