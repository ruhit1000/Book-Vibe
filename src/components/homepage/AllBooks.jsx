import axios from 'axios';
import React, { use } from 'react';
import BookCard from '../ui/BookCard';

const booksPromise = axios.get('/booksData.json')

const AllBooks = () => {
    const booksRes = use(booksPromise)
    const books = booksRes.data

    return (
        <div className='my-20 max-w-300 mx-auto'>
            <h2 className='font-bold text-4xl text-center'>Books</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 place-items-center'>
                {
                    books.map((book) => <BookCard key={book.bookId} book={book} />)
                }
            </div>
        </div>
    );
};

export default AllBooks;