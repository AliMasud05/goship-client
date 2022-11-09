import React from 'react';
import { useLoaderData } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceDetails = () => {
    const {_id,name,cost,about,rating,image}=useLoaderData();
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
        </div>
    );
};

export default ServiceDetails;