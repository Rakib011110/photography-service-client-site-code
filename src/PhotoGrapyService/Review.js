import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import AllReviewItems from './AllReviewItems';

const Review = () => {
    const { title, _id, img, name } = useLoaderData()
    const { user } = useContext(AuthContext)

    const hanleReview = (e) => {
        e.preventDefault()
        const form = e.target
        const name = `${form.fristName.value} ${form.lastName.value}`
        const email = user?.email || 'unregistered';
        const reviewMassage = form.reviewMassage.value
        console.log(email, name, reviewMassage)



        const addReview = {
            service: _id,
            title: title,
            name: name,
            email,
            reviewMassage



        }

        fetch("http://localhost:5000/reviews", {

            method: "POST",
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review Succesfully')
                    form.reset()

                }

            })
            .catch(err => console.log(err))


    }







    return (
        <div>
            <form onSubmit={hanleReview} action="">
                <div className=' grid grid-cols-1 md:grid-cols-3 gap-5 mb-10 mt-5'>

                    <input name='fristName' type="text" placeholder="Frist Name" className="input input-bordered input-info w-full" />
                    <input name='lastName' type="text" placeholder=" Last Name" className="input input-bordered input-info w-full" />
                    <input name='email' type="text" placeholder="Your Email" className="input input-bordered input-info w-full" defaultValue={user?.email} />
                </div>

                <div>

                    <textarea name='reviewMassage' className="textarea w-full mb-5 textarea-info" placeholder="Your Review"></textarea>
                    {
                        user ?
                            <>



                                < button className="btn mb-3  btn-circle">Submit</button>

                            </>
                            :

                            <button className='btn btn-info'>   <Link to='/login'> Please login And send review</Link></button>
                    }
                </div>

            </form >


            <div className='mb-10 mt-10'>






                {/* <AllReviewItems></AllReviewItems> */}
            </div>
        </div >
    );
};

export default Review;