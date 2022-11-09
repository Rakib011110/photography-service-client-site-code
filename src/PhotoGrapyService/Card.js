import React from 'react';
import { Link } from 'react-router-dom';
import AllReviewItems from './AllReviewItems';
import Review from './Review';

const Card = ({ service }) => {
    const { img, title, description, _id } = service

    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                {
                    <p>  {service.description.slice(0, 100)}<Link to={`/services/${_id}`} className='text-red-600'> ..more</Link>  </p>
                }
                <div className="card-actions mt-5 mb-6">
                    <button className="btn btn-info"> <Link to={`/services/${_id}`}> See Details</Link></button>

                    {/* <button className="btn btn-info" > <Link to="/reviwsdata">review </Link> </button> */}
                    {/* <button className="btn btn-info"> <Link to={`/review/${_id}`}> add review</Link> </button> */}

                </div>
            </div>
        </div>
    );
};

export default Card;