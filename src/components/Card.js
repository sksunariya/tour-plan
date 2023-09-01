import React, { useState } from 'react';

function Card ({id, image, info, price, name, removeTour}) {

    const [readmore, setReadmore] = useState(false);

    const description = readmore ? info : `${info.substring(0,175)}....`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div>
            <div className="p-[1rem] flex flex-col rounded-[10px] shadow-[0_3px_8px_rgba(0,0,0,0.24)]">
                <img src={image} className="image aspect-[1/1] object-cover" alt=""></img>
                <div className="tour-details">
                    <h4 className="tour-price pl-1 pt-2 font-bold text-[#1faa59]"> ₹{price} </h4>
                    <h4 className="tour-name font-bold text-xl pl-1"> {name} </h4>
                </div>
                <div className="description pl-1 pt-1">
                    {description}
                    <span className="read-more cursor-pointer text-blue-500" onClick = {readmoreHandler}>
                        {readmore ? ' Show Less' : ` Read More`}
                    </span>
                </div>
                <button onClick={() => removeTour(id)} className="btn-red mt-[18px] py-[10px] px-[80px] border-[1px] border-solid border-[#b4161b] text-[15px] rounded-lg font-bold bg-[#b4161b21] hover:bg-red-800 transition-all duration-200 hover:text-white">
                    Not Interested
                </button>
            </div>
        </div>
    )
}

export default Card;