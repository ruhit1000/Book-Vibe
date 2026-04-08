import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const { id } = useParams();
    const books = useLoaderData();

    const book = books.find((book) => book.bookId == id)

    return (
        <div className='w-[95%] lg:container mx-auto my-10 grid lg:grid-cols-2 gap-10'>
            <div className='bg-base-300 rounded-2xl flex justify-center items-center max-h-100 lg:max-h-200'>
                <img className='h-[80%]' src={book.image} alt="" />
            </div>
            <div className='py-5'>
                <h1 className='font-bold text-4xl mb-2'>{book.bookName}</h1>
                <p className='text-xl font-medium mb-5'>By: {book.author}</p>
                <hr className='border-base-300' />
                <p className='text-xl font-medium my-4'>{book.category}</p>
                <hr className='border-base-300' />
                <p className='my-6'><b>Review:</b> {book.review}</p>
                <div className='flex gap-4 mb-6'>
                    <h4 className='font-bold'>Tag:</h4>
                    {
                        book.tags.map((tag, index) => <div key={index} className="badge badge-soft badge-success font0bold">{tag}</div>)
                    }
                </div>
                <hr className='border-base-300' />
                <div className='grid grid-cols-[200px_200px] my-6'>
                    <div className='space-y-2'>
                        <p>Number of Pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className='space-y-2 font-bold'>
                        <p>{book.totalPages}</p>
                        <p>{book.publisher}</p>
                        <p>{book.yearOfPublishing}</p>
                        <p>{book.rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;