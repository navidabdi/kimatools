import React from 'react';

export default function RangeGroup({ 
    title,
    value,
    max, 
    min,
    step,
    leftIcon, 
    rightIcon,
    handleChange
}) {

    return (
        <div className="flex flex-col mt-3">
            <h4 className="flex-1 overflow-hidden font-semibold text-lg text-gray-400">
                { title }
            </h4>
            <div className="flex mt-2">
                <button
                    className="w-10 h-10 flex items-center justify-center flex-none rounded-full shadow-sm bg-indigo-400 text-white focus:outline-none focus:ring-4 focus:ring-indigo-200"
                    onClick={() => handleChange(Math.max(value - step, min))}
                >
                    { leftIcon }
                </button>
                <input
                    type="range"
                    className="mx-4 range-input"
                    value={value}
                    max={max}
                    min={min}
                    step={step}
                    onChange={(e) => handleChange(e.target.value)}
                ></input>
                <button
                    className="w-10 h-10 flex items-center justify-center flex-none rounded-full shadow-sm bg-indigo-400 text-white focus:outline-none focus:ring-4 focus:ring-indigo-200"
                    onClick={() => handleChange(Math.min(value + step, max))}
                >
                    { rightIcon }
                </button>
            </div>
        </div> 
    );  
}