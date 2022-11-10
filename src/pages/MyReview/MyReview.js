import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MyReview = () => {
    const {user}=useContext(AuthContext);
    console.log(user);
    // const [myReviews,setMyReviews]=useState({});
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/reviews?email=${user.email}`)
    //     .then(res=>res.json())
    //     .then(data=>setMyReviews(data))
    // },[user?.email])

    return (
        <div>
            <h1>My review</h1>

            
        </div>
    );
};

export default MyReview;