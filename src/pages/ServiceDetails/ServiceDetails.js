import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ServiceDetails = () => {
    const {_id,name,cost,about,rating,image}=useLoaderData();
    const{user}=useContext(AuthContext);
    const [reviews ,setReviews] =useState({});
    const url = `http://localhost:5000/reviews?review_id=${_id}`
    useEffect(()=>{
        fetch(url)
           
    },[user?.email]);

    const handleReview =event=>{
        event.preventDefault();
        const form = event.target;
        const reviewer =form.name.value;
        const image =form.url.value;
        const email = user?.email || 'unregistered';

        
        const message = form.review.value;
        //console.log(name,email,review,image);
        const review ={
            review_id: _id,
            title: name ,
            reviewer:reviewer,
            email:email,
            img:image,
            Option:message,

        }
        console.log(review);
        fetch('http://localhost:5000/reviews',{
             method:'POST',
             headers:{
                'content-type':'application/json'
             },
             body:JSON.stringify(review)

        })
        .then(res =>res.json())
        .then(data=>{
            if (data.acknowledged){
               alert('review added successfully');
                form.reset();  
            }
            console.log(data)})
        .catch(err=>console.error(err));


    }
    return (
        <div>
            <div className="card  lg:w-3/5  mx-auto bg-slate-50 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img className='lg:h-[35rem]' src={image} alt="Shoes" />

                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title text-2xl text-red-500 font-serif">
                        {name}
                        
                    </h2>
                    <p className='font-serif text-black font-medium'>{about}</p>
                   
                    <div className="badge w-full text-xl badge-outline py-3 text-black font-semibold">Rating : <span className='text-red-600 font-bold'>{rating} out of 5</span> </div>
                    <div className="badge w-full text-xl badge-outline py-3 text-black font-semibold">Estimate Cost : <span className='text-red-600 font-bold'>{cost}</span></div>
                  
                </div>
                
            </div>
            <div>review{reviews.length}</div>

            <div>
                <form onSubmit={handleReview}  className='border  rounded-lg grid grid-cols-1  w-3/5 mx-auto my-4 py-3'>
                    <input  type="text" name='name' placeholder="Your name" className="input input-bordered w-full mx-auto max-w-xs" />
                    <input type="url"  placeholder='upload image url' name="url" id="" className="input input-bordered w-full mx-auto max-w-xs" />

                    <input type="email" placeholder="email" defaultValue={user?.email} className="input input-bordered mx-auto my-2  w-full max-w-xs" />
                    
                    <textarea name='review' className="textarea textarea-accent w-1/2 h-28  mx-auto " placeholder="Bio"></textarea>
                    <button type='submit' className='btn glass bg-orange-600 text-black w-32 mx-auto my-3'>Add Review</button>



                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;