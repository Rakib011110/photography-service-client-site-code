import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {
    const { title, img, price, description, _id } = useLoaderData()


    return (
        <div className="card lg:card-side bg-base-100 shadow-xl mt-20 ">








            <figure>


                <PhotoProvider>
                    <PhotoView src={img} alt=''>
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>


            </figure>




            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h2 className="card-title "> Price:${price}</h2>
                <p>{description} </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-info"><Link to={`/review/${_id}`}>Review</Link > </button>
                    <button className="btn btn-info"><Link to="/reviwsdata" >See Review</Link > </button>
                </div>
            </div>
        </div >
    );
};

export default ServiceDetails;