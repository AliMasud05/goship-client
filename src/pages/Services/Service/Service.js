import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceItem from '../serviceItem/ServiceItem';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => {
                setServices(data);

            })

    }, [])

    return (
        <div >
            <div className='grid grid-cols-1 lg:grid-cols-3'>
            {
                services.map(service =><ServiceItem
                    key={service._id}
                    service={service}
                >

                </ServiceItem>)
            }


            </div>
            <Link to='/services'><button className="btn btn-secondary my-4">SEE MORE</button></Link>
            
        </div>
    );
};

export default Service;