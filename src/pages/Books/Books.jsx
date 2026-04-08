import React, { useContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { BookContext } from '../../context/BookContext';
import BookCardSmall from '../../components/ui/BookCardSmall';
import BlankData from '../../components/ui/BlankData';

const Books = () => {

    const { readList, wishlist } = useContext(BookContext)

    return (
        <div className='w-[95%] lg:container mx-auto'>
            <div className='py-8 bg-base-300 text-center rounded-2xl my-5'>
                <h2 className='font-bold text-3xl'>Books</h2>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    {
                        readList.length > 0
                            ? <div className='my-8 space-y-6'>
                                {readList.map((book) => <BookCardSmall key={book.bookId} book={book} />)}
                            </div>
                            : <BlankData />
                    }
                </TabPanel>
                <TabPanel>
                    {
                        wishlist.length > 0
                            ? <div className='my-8 space-y-6'>
                                {wishlist.map((book) => <BookCardSmall key={book.bookId} book={book} />)}
                            </div>
                            : <BlankData />
                    }
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;

// 