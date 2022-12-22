import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const Service = () => {

    const [services, setServices] = useState([])
    // const { img, title, description, _id } = services


    useEffect(() => {

        fetch('https://assignment-11-server-site-mu.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])




    return (
        <div data-aos="fade-up">

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3    m-10 '>

                {
                    // services.map(service => <Card service={service} key={service._id} > </Card>)
                    services.map(service => <div service={service} key={service._id} >






                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={service.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {service.title}
                                    <div className="badge badge-secondary">${service.price} </div>
                                </h2>
                                <p>  {service.description.slice(0, 100)}<Link to={`/services/${service._id}`} className='text-red-600'> ..more</Link>  </p>



                                <div className="card-actions justify-end mb-5 mt-10">

                                    <div className="badge badge-outline  text-1xl ">       <button className=""> <Link to={`/services/${service._id}`}>Details</Link></button> </div>
                                    <div className="badge badge-outline ">   <button className="" > <Link to="/reviwsdata">review </Link> </button> </div>
                                    <div className="badge badge-outline">   <button className=""> <Link to={`/review/${service._id}`}> add review</Link> </button></div>
                                </div>
                            </div>
                        </div>
                    </div>)

                }





            </div>
        </div>
    );
};

export default Service;