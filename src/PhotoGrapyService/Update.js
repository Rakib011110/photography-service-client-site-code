import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Update = () => {
    // const { user } = useContext(AuthContext)
    const update = useLoaderData()

    const [user, setUser] = useState(update)
    // const { title, _id, img, name } = useLoaderData()


    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const name = `${form.fristName.value} ${form.lastName.value}`
        const email = user?.email || 'unregistered';
        const reviewMassage = form.reviewMassage.value
        console.log(email, name, reviewMassage)


        fetch(`http://localhost:5000/reviwsdata/${update._id}`, {


            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)



        })
            .then(res => res.json())
            .then(data => {

                if (data.acknowledged > 0) {
                    alert('update Succes')
                }

                console.log(data)
            })




    }




    return (
        <div>



            <form onSubmit={handleUpdate} action="">
                <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 mt-5'>

                    <input name='fristName' type="text" placeholder="Frist Name" className="input input-bordered input-info w-full" />
                    <input name='lastName' type="text" placeholder=" Last Name" className="input input-bordered input-info w-full" />
                    <input name='email' type="text" placeholder="Your Email" className="input input-bordered input-info w-full" defaultValue={update.email} />
                </div>

                <div>

                    <textarea name='reviewMassage' className="textarea w-full mb-5 textarea-info" placeholder="Your Review" defaultValue={update.reviewMassage}></textarea>

                    <button className="btn btn-ghost btn-xs"><Link >Edite</Link> </button>

                </div>

            </form >




        </div>
    );
};

export default Update;