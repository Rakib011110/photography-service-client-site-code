import React from 'react';
import PhotoGrapyService from '../PhotoGrapyService/PhotoGrapyService';
import Banner from './Banner/Banner';
import HeaderBanner from './HeaderBanner';

const Home = () => {
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <PhotoGrapyService></PhotoGrapyService>
            <Banner />
        </div>
    );
};

export default Home;