import React from 'react';

const Slider = ({ slide }) => {
    const { image, id, prev, next } = slide;

    

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-2xl font-bold  text-red-500 bg-indigo-400 bg-opacity-50 p-5 rounded-lg'>
                    Welcome To Photographer Future

                </h1>

            </div>
            <div className="-translate-y-1/2 w-2/5 left-24 top-1/2  absolute flex justify-end transform text-1xl bg-opacity-30 p-10 rounded-xl bg-info text-slate-100 text-bold  shadow-2xl ">
                <p> Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image senso</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-10  right-10 top-1/2">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default Slider;