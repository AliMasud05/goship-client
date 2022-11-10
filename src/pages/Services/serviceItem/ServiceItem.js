import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';


const ServiceItem = ({service}) => {
   // console.log(service)
    const{about,cost,image,rating,name,_id}=service;
    return (
        <div>
            <div className="card w-96 h-full mx-auto bg-slate-50 shadow-xl">
                <PhotoProvider>
                    <PhotoView src={image}>
                     <img src={image} alt="Shoes" />

                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{about.slice(0,200)}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline text-gray-900 py-3">Rating : {rating} out of 5</div>
                        <div className="badge badge-outline text-gray-700 py-3">Estimate Cost : {cost}</div>
                    </div>
                </div>
                <div>
                    <Link to={`/services/${_id}`}><button className='btn to-primary w-full py-2 text-red-400 font-serif font-semibold'>See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceItem;