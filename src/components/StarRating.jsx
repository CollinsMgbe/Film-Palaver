import React, { useState } from 'react';

const StarRating = ({ initialRating = 0, onRate }) => {
    const [rating, setRating] = useState(initialRating);

    const handleRating = (rate) => {
        setRating(rate); // Update local state
        if (onRate) onRate(rate); // Call callback if provided
    };

    return (
        <div className="star-rating">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={star <= rating ? 'star filled' : 'star'}
                    onClick={() => handleRating(star)}
                >
                    ★
                </span>
            ))}
        </div>
    );
};

export default StarRating;