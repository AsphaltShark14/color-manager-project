import React from "react";
import { FaStar } from "react-icons/fa";

function Star({ selected = false, onSelect = f => f }) {
  return <FaStar color={selected ? "gold" : "grey"} onClick={onSelect} />;
}

const createArray = length => [...Array(length)];

export default function StarRating({ totalStars = 5, selectedStars = 0, onRate = f => f }) {

    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star key={i} selected={selectedStars > i} onSelect={() => onRate(i+1)} />
            ))}
            
        </>
    );
}

