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
            image: "https://www.gannett-cdn.com/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?crop=1999,1125,x0,y78&width=1999&height=1125&format=pjpg&auto=webp",
            prev: 1,
            id: 2,
            next: 3
        },


        {
            image: "https://www.newzealand.com/assets/Tourism-NZ/Auckland/1a74e077c0/img-1536865193-7337-8583-61F24BC0-9C5E-2C98-61AB1E16F77A7F10__aWxvdmVrZWxseQo_CropResizeWzEyMDAsNjMwLDc1LCJqcGciXQ.jpg",
            prev: 2,
            id: 3,
            next: 1
        }

    ]



    return (
        <div className="carousel w-full mt-20 ">
            {

                bannerData.map(slide => <Slider slide={slide}> </Slider>)
            }
        </div>
    );
};

export default HeaderBanner;