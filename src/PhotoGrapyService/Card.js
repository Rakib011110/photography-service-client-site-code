import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const Card = ({ service }) => {
    const { img, title, _id } = service



    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">


                <PhotoProvider>
                    <PhotoView src={img} alt=''>
                        <img src={img} alt="" className="rounded-xl" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                {
                    <p>  {service.description.slice(0, 100)}<Link to={`/services/${_id}`} className='text-red-600'> ..more</Link>  </p>
                }
                <div className="card-actions mt-5 mb-6">
                    <button className="btn btn-info"> <Link to={`/services/${_id}`}> See Details</Link></button>


                </div>
            </div>
        </div>
    );
};

export default Card;