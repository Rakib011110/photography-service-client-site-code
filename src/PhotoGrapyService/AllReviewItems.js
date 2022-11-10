import React, { useContext, useEffect, useState } from 'react';
// import { json } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
// import DetailsReview from './DetailsReview';
import ReviewTable from './ReviewTable';

const AllReviewItems = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReview] = useState([])



    useEffect(() => {

        fetch(`https://assignment-11-server-site-mu.vercel.app/reviwsdata?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))

    }, [user?.email])




    const handleDelete = id => {
        const proceed = window.confirm('are you sure');
        if (proceed) {
            fetch(`https://assignment-11-server-site-mu.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("delete Succesfully")
                        const remaining = reviews.filter(r => r._id !== id)
                        setReview(remaining)
                    }
                })
        }
    }






    return (
        <div>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <th>Delete</th>
                                </label>
                            </th>
                            <th>Title</th>
                            <th>Review Massage</th>
                            <th>Email</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            reviews.map(review => <ReviewTable handleDelete={handleDelete} review={review}>  </ReviewTable>)
                        },




                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllReviewItems;