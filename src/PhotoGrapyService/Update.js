import React from 'react';
import { Link } from 'react-router-dom';

const Update = () => {
    return (
        <div>
            <form action="">
                <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 mt-5'>

                    <input name='fristName' type="text" placeholder="Frist Name" className="input input-bordered input-info w-full" />
                    <input name='lastName' type="text" placeholder=" Last Name" className="input input-bordered input-info w-full" />
                    <input name='email' type="text" placeholder="Your Email" className="input input-bordered input-info w-full" />
                </div>

                <div>

                    <textarea name='reviewMassage' className="textarea w-full mb-5 textarea-info" placeholder="Your Review"></textarea>

                    <button className="btn btn-ghost btn-xs"><Link > Update</Link> </button>

                </div>

            </form >

        </div>
    );
};

export default Update;