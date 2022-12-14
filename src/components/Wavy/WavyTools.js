import Accordion from "../../Layouts/Accordion";
import RangeInput from "../Controlers/RangeInput";
import { defaultConfigAtom, computedPathAtom } from "../../atoms/Wavy";
import { useRecoilState, useSetRecoilState } from "recoil";

import { useCallback, useEffect } from "react";
import { waveInit } from "../../wave";
import GradientPicker from "../Controlers/GradientPicker";

import Export from "../Export";

const WavyTools = () => {
  const [config, setConfig] = useRecoilState(defaultConfigAtom);
  const setComputedPath = useSetRecoilState(computedPathAtom);

  useEffect(() => {
    setComputedPath(waveInit(config));
  }, [config, setComputedPath]);

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
      <Accordion
        title="Wave"
        content={[
          <RangeInput
            title="Height"
            min={200}
            max={600}
            range={100}
            value={config.height}
            setValue={(height) => handleConfigChange({ height })}
          />,
          <RangeInput
            title="Complexity"
            symbol="time"
            min={2}
            max={10}
            range={1}
            value={config.segmentCount}
            setValue={(segmentCount) => handleConfigChange({ segmentCount })}
          />,
          <RangeInput
            title="Layers Count"
            symbol="num"
            min={2}
            max={6}
            range={1}
            value={config.layersCount}
            setValue={(layersCount) => handleConfigChange({ layersCount })}
          />,
        ]}
      />
      <Accordion title="Set Color" content={<GradientPicker />} />

      <Export title="Download" randomize={randomize} />
    </div>
  );
};

export default WavyTools;
