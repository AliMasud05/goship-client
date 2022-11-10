import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AddService = () => {
    const{user}=useContext(AuthContext);
    const handleAddService=event=>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const cost = form.cost.value;
        const url = form.image.value;
        const rating = form.rating.value;
        const message = form.message.value;

        const service = {
            name:name,
            cost:cost,
            image:url,
            rating:rating,
            about: message
            
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('review added successfully');
                    form.reset();
                }
                console.log(data)
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
           
                <form onSubmit={handleAddService}>
                    
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <input name="name" type="text" placeholder="Job Title" className="input input-ghost w-full  input-bordered" />
                        <input name="cost" type="text" placeholder="cost" className="input input-ghost w-full  input-bordered" />
                        <input name="image" type="url" placeholder="image url" className="input input-ghost w-full  input-bordered" required />
                        <input name="rating" type="text" placeholder="Rating here out of 5" className="input input-ghost w-full  input-bordered"  />
                    </div>
                    <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>

                    <input className='btn' type="submit" value="Place Your Order" />
                </form>

         
            
        </div>
    );
};

export default AddService;