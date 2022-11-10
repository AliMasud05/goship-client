import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyReviewDetails from '../../MyReviewDetails/MyReviewDetails';

const MyReview = () => {
    const {user}=useContext(AuthContext);
    console.log(user);
    const [myReviews , setMyReviews]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setMyReviews(data))

    },[user?.email])
    console.log(myReviews);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = myReviews.filter(odr => odr._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }
    }
    

    return (
        <div>
            {
                myReviews.map(review=><MyReviewDetails
                key={review._id}
                review={review}
                handleDelete={handleDelete}
                
                >

                </MyReviewDetails>)
            }


            
        </div>
    );
};

export default MyReview;