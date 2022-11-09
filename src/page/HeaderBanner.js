import React from 'react';
import Slider from './Slider';

const HeaderBanner = () => {


    const bannerData = [
        {
            image: "https://images.unsplash.com/photo-1499343245400-cddc78a01317?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvZ3JhcGhlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: "https://www.picktime.com/webassets/2021/img/industries/photographers-min.png",
            prev: 1,
            id: 2,
            next: 3
        },


        {
            image: "https://images.squarespace-cdn.com/content/v1/5425cf54e4b04619065ee522/1594504264912-9XSRQHYH7HW8YTC9GP8C/DSCF0715-Pano.jpg?format=2500w",
            prev: 2,
            id: 3,
            next: 1
        }

    ]



    return (
        <div className="carousel w-full py-10">
            {

                bannerData.map(slide => <Slider slide={slide}> </Slider>)
            }
        </div>
    );
};

export default HeaderBanner;