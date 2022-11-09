import React from 'react';
import PhotoGrapyService from '../PhotoGrapyService/PhotoGrapyService';
import HeaderBanner from './HeaderBanner';

const Home = () => {
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <PhotoGrapyService></PhotoGrapyService>
        </div>
    );
};

export default Home;