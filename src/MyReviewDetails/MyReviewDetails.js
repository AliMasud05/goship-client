import React from 'react';

const MyReviewDetails = ({ review, handleDelete }) => {
    const{opinion,title,_id}=review;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{opinion}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleDelete(_id)} className="btn btn-primary">DELETE</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default MyReviewDetails;