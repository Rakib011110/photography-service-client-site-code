import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ReviewTable = ({ review, handleDelete }) => {
    const { title, name, email, reviewMassage,
        service, _id } = review
    const [addedreview, setAddedRewivew] = useState({})



    useEffect(() => {

        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setAddedRewivew(data))


    }, [service])




    // const handleDelete = id => {
    //     const proceed = window.confirm('are you sure');
    //     if (proceed) {
    //         fetch(`http://localhost:5000/reviews/${_id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 if (data.deletedCount > 0) {

    //                 }
    //             })
    //     }
    // }


    const handleUdpate = (id) => {
        fetch(`http://localhost:5000/services/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify()
        })



    }




    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            {
                                addedreview?.img &&

                                < img src={addedreview.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{title}</div>
                        <div className="text-sm opacity-50">{name} </div>
                    </div>
                </div>
            </td>
            <td>
                {reviewMassage}
                <br />

            </td>
            <td>{email}</td>
            <th>
                <button onClick={handleUdpate} className="btn btn-ghost btn-xs"><Link to={`/update/${_id}`}> Update</Link> </button>
            </th>
        </tr>

    );
};

export default ReviewTable;