import React from 'react';
import { CiStar } from 'react-icons/ci';

const BookCard = ({ book }) => {
    return (
        <div className='border border-base-300 p-6 rounded-2xl shadow w-93.5 h-full'>
            <div className='rounded-2xl bg-base-300 py-8'>
                <img className='w-33.5 h-41.5 mx-auto rounded-xl' src={book.image} alt="" />
            </div>
            <div className='flex gap-3 mt-6 mb-4'>
                {book.tags.map((tag, index) => <div key={index} className="badge badge-soft badge-success">{tag}</div>)}
            </div>
            <div className='mb-5 space-y-4'>
                <h3 className='font-bold text-2xl'>{book.bookName}</h3>
                <p className='font-medium'>By: {book.author}</p>
            </div>
            <hr className='border-dashed border-gray-400'/>
            <div className='mt-5 flex justify-between font-medium'>
                <p>{book.category}</p>
                <p className='flex items-center gap-2'>{book.rating} <CiStar /></p>
            </div>
        </div>
    );
};

export default BookCard;