import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const BookContext = createContext();

const BookProvider = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState([]);
    const [wishlist, setWishlist] = useState([])

    const handleMarkAsRead = (currentBook) => {
        setStoredBooks([...storedBooks, currentBook])
        toast.success(`${currentBook.bookName} has added to your list`)
    }
    
    const handleWishlist = (currentBook) => {

        const isExistInReadList = storedBooks.find((book) => book.bookId === currentBook.bookId)

        if(isExistInReadList) {
            toast.error('Already added to your read list')
            return;
        }

        setWishlist([...wishlist, currentBook])
        toast.success(`${currentBook.bookName} has added to your wishlist`)
    }

    const data = {
        storedBooks,
        setStoredBooks,
        handleMarkAsRead,
        handleWishlist,
        wishlist
    }

    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;