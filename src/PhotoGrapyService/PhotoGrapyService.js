import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const PhotoGrapyService = () => {
    const [services, setServices] = useState([])

    useEffect(() => {

        fetch('https://assignment-11-server-site-mu.vercel.app')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])


    return (
        <div>
            <h1 className='text-black text-3xl p-6 m-10 shadow-xl bg-white rounded-lg'> See My PhotoGrapy Service  </h1>



            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3    m-10 '>

                {
                    services.map(service => <Card service={service} key={service._id} > </Card>)

                }

            </div>

            <div className='mb-10 '>

                <button className='btn btn-circle text-2xl '><Link to="/services">More Service </Link>  </button>
            </div>


        </div>
    );
};

export default PhotoGrapyService;