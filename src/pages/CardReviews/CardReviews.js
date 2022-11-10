import React from 'react';

const CardReviews = ({review}) => {
    const { opinion, img, reviewer }=review
    return (
        <div>
            
            <div className="max-w-xs rounded-md shadow-md dark:text-gray-100">
                <img src={img} alt="" className="object-cover  object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{reviewer}</h2>
                        <p className="dark:text-gray-100">{opinion}</p>
                    </div>
                   
                </div>
            </div>
            
        </div>
    );
};

export default CardReviews;