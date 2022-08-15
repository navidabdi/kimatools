import React, { useCallback, useEffect, useRef, useState } from 'react';

const linearGradient = "linear-gradient(to right, rgb(255 0 0), rgb(255 255 0), rgb(0 255 0), rgb(0 255 255), rgb(0 0 255), rgb(255 0 255), rgb(255 0 0))";

const spectrumRanges = [
    { from: [255, 0, 0], to: [255, 255, 0], i: 1 }, 
    { from: [255, 255, 0], to: [0, 255, 0], i: 0 }, 
    { from: [0, 255, 0], to: [0, 255, 255], i: 2 },  
    { from: [0, 255, 255], to: [0, 0, 255], i: 1 }, 
    { from: [0, 0, 255], to: [255, 0, 255], i: 0 }, 
    { from: [255, 0, 255], to: [255, 0, 0], i: 2 }
];

const RGBColorValue = (from, to, leftRatio) => {
    return Math.round(from + (to - from) * leftRatio);
};

const componentToHex =(c) => {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
};
  
const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
};

export default function ColorRange({ 
    handleColorSelect
}) {
    const container = useRef(null);
    const [downed, setDowned] = useState(false);

    const onMove = useCallback((e) => {
        handleColorSelect(calcColorValue(e));
    }, [handleColorSelect]);

    useEffect(() => {
        if (downed) {
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
        } else {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
        }

        return () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
        };
    }, [downed, onMove]);

    const onDown = (e) => {
        setDowned(true);
    };

    const onUp = (e) => {
        setDowned(false);
    };

    const calcColorValue = (e) => {
        const { clientX } = e; 
        const { left, width } = container.current.getBoundingClientRect();
        const leftDistance = Math.min(Math.max(clientX - left, 0), width - 1);
        const rangeWidth = width / spectrumRanges.length;
        const rangeIndex = Math.floor(leftDistance / rangeWidth);
        const leftRatio = ((leftDistance % rangeWidth) / rangeWidth).toFixed(2);
        const { from, to } = spectrumRanges[rangeIndex];

        return rgbToHex(...Object.values({
            r: RGBColorValue(from[0], to[0], leftRatio),
            g: RGBColorValue(from[1], to[1], leftRatio),
            b: RGBColorValue(from[2], to[2], leftRatio)
        }));
    };

    return (
        <div className="relative w-full bg-white">
            <div 
                ref={container} 
                onClick={onMove}
                onMouseDown={onDown}
                className="w-full h-8 rounded-lg cursor-pointer" 
                style={{background: linearGradient}}
            ></div>
        </div>
    );
}