import { useState } from 'react';
import { blobGenerator } from '../utils';

const MainSection = () => {
  const [changeBgColor, setChangeBgColor] = useState('#FF0066');
  const [changeWidth, setChangeWidth] = useState('100');

  const { path } = blobGenerator({
    size: 600,
    growth: 6,
    edges: 10,
    seed: true,
  });

  return (
    <>
      <section className="col-span-7 p-10">
        <svg viewBox="0 0 900 600">
          <rect x="0" y="0" width="900" height="600" fill="#c3ccff"></rect>
          <path fill={changeBgColor} d={path} />
        </svg>
        <input
          type="color"
          onChange={(e) => {
            setChangeBgColor(e.target.value);
          }}
          value={changeBgColor}
        />
      </section>
    </>
  );
};

export default MainSection;
