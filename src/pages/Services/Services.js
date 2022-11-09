import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceItem from './serviceItem/ServiceItem';

const Services = () => {
    const[services, setServices] =useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>{setServices(data);
            
        })

    },[])
    return (
        
       <div className='w-full mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {
                    services.map(service =>
                        <ServiceItem
                            key={service._id}
                            service={service}
                        ></ServiceItem>
                    )
                }

            </div>
            <Link to='/'><button className="btn btn-secondary my-4">SEE LESS</button></Link>
       </div>
    );
};

export default Services;