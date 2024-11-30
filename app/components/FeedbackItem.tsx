import React, { useState } from "react";
import { RatingComponent } from "react-rating-emoji";
import 'react-rating-emoji/dist/index.css';

interface ContentFeedbackItem{
    iconItem: String,
    questionItem: string,
}

const FeedbackItem : React.FC<ContentFeedbackItem> = ({iconItem, questionItem}) => {
    const [rating, setRating] = useState(0);

    const handleRating = (newRating: React.SetStateAction<number>) => {
        setRating(newRating);
    }

    return (
        <div className="flex justify-between gap-4 p-5">
            <div className="flex-initial w-15 text-white font-extrabold">
                <p className="text-3xl">{iconItem}</p>
            </div>
            <div className="flex-auto w-64 text-white text-wrap uppercase font font-bold content-center">
                <p className="text-sm text-balance">{questionItem}</p>
            </div>
            <div className="flex-initial order-last justify-items-end">
                <RatingComponent rating={rating} onClick={handleRating} />
            </div>
        </div>
    )
}

export default FeedbackItem;