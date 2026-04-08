import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoPeopleOutline } from 'react-icons/io5';
import { MdOutlineInsertPageBreak } from 'react-icons/md';
import { Link } from 'react-router';

const BookCardSmall = ({ book }) => {

    return (
        <div className='flex flex-col lg:flex-row gap-6 items-center p-6 border border-base-300 rounded-2xl'>
            <div className='bg-base-300 rounded-2xl w-57.5 h-57.5 flex items-center justify-center mx-auto mb-4 lg:mb-0'>
                <img className='max-w-[80%] max-h-[80%]' src={book.image} alt="" />
            </div>
            <div className='w-full'>
                <h2 className='font-bold text-2xl mb-1'>{book.bookName}</h2>
                <p>By: {book.author}</p>
                <div className='flex flex-col lg:flex-row gap-6 my-4 '>
                    <div className='flex gap-4'>
                        <p className='font-bold'>Tag:</p>
                        <div className='flex gap-2'>
                            {
                                book.tags.map((tag, index) => <div key={index} className="badge badge-soft badge-success">{tag}</div>)
                            }
                        </div>
                    </div>
                    <div>
                        <p className='flex items-center gap-2'><CiLocationOn /> Year of Publishing: {book.yearOfPublishing}</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-4'>
                    <p className='flex items-center gap-2'><IoPeopleOutline /> Publisher: {book.publisher}</p>
                    <p className='flex items-center gap-2'><MdOutlineInsertPageBreak /> Pages: {book.totalPages}</p>
                </div>
                <hr className='border-base-300 my-3'/>
                <div className='flex flex-col sm:flex-row gap-2'>
                    <div className="badge badge-soft badge-info">Category: {book.category}</div>
                    <div className="badge badge-soft badge-warning">Rating: {book.rating}</div>
                    <Link to={`/bookDetails/${book.bookId}`}>
                        <div className="badge badge-success">View Details</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCardSmall;