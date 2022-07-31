import { useState } from 'react';
import './MainSection.scss';
import { blobGenerator } from '../../utils';

const MainSection = () => {
  const [changeBgColor, setChangeBgColor] = useState('#FF0066');
  const [changeWidth, setChangeWidth] = useState('100');

  const { path } = blobGenerator({
    size: 300,
    growth: 6,
    edges: 10,
    seed: null,
  });

  return (
    <section className="main__section">
      <svg viewBox="0 0 500 500">
        <path d={path} />
      </svg>
    </section>
  );
};

export default MainSection;
