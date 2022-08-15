import Accordion from "../../Layouts/Accordion";
import RangeInput from "../Controlers/RangeInput";
import { defaultConfigAtom, computedPathAtom } from "../../atoms/Wavy";
import { useRecoilState } from "recoil";

import { useCallback, useEffect, useRef } from "react";
import { waveInit } from "../../wave";
import GradientPicker from "../Controlers/GradientPicker";

import { ReactComponent as Random } from "../../assets/svg/random.svg";

const WavyTools = () => {
  const [config, setConfig] = useRecoilState(defaultConfigAtom);
  const [computedPath, setComputedPath] = useRecoilState(computedPathAtom);

  useEffect(() => {
    setComputedPath(waveInit(config));
  }, [config]);

  const handleConfigChange = useCallback(
    (changedConfig) => {
      setConfig((prev) => {
        return { ...prev, ...changedConfig };
      });
    },
    [setConfig],
  );

  const randomize = useCallback(() => {
    setComputedPath(waveInit(config));
  }, [setComputedPath, config]);

  return (
    <div>
      {console.log(config)}
      <Accordion
        title="Wave"
        content={[
          <RangeInput
            title="Height"
            min={200}
            max={800}
            range={100}
            value={config.height}
            setValue={(height) => handleConfigChange({ height })}
          />,
          <RangeInput
            title="Complexity"
            min={2}
            max={10}
            range={1}
            value={config.segmentCount}
            setValue={(segmentCount) => handleConfigChange({ segmentCount })}
          />,
          <RangeInput
            title="Layers Count"
            min={2}
            max={6}
            range={1}
            value={config.layersCount}
            setValue={(layersCount) => handleConfigChange({ layersCount })}
          />,
        ]}
      />
      <Accordion title="Set Color" content={<GradientPicker />} />
      <Accordion
        title="Export"
        content={
          <button
            onClick={randomize}
            className="border-4 border-gray-100 px-6 py-4 flex items-center justify-center bg-indigo-400 text-white rounded-full transform transition-all hover:bg-indigo-600 hover:border-indigo-200 focus:outline-none focus:border-indigo-200"
          >
            <Random className="fill-current w-8 h-8" />
            <span className="ml-4 font-bold text-white text-lg">Generate</span>
          </button>
        }
      />
    </div>
  );
};

export default WavyTools;
