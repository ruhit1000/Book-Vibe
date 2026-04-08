import React from 'react';
import heroImg from '../../assets/hero_img.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 container mx-auto my-10 py-20 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <img
                    src={heroImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold mb-10">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn btn-success text-white">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;