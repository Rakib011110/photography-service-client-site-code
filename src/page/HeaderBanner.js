import React from 'react';
import Slider from './Slider';

const HeaderBanner = () => {


    const bannerData = [
        {
            image: "https://avada.theme-fusion.com/photography/wp-content/uploads/sites/59/2021/05/photo-mobile-2.jpg",
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: "https://images.squarespace-cdn.com/content/v1/5425cf54e4b04619065ee522/1594504264912-9XSRQHYH7HW8YTC9GP8C/DSCF0715-Pano.jpg?format=2500w",
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