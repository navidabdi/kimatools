import React, { useCallback, useEffect, useRef, useState } from "react";
import { useModal } from "../../contexts/ModalContext";

import Panel from "./Panel";
import Canvas from "./Canvas";

import { waveInit } from "../../wave";
import { defaultConfig } from "../../utils/constantsWavy";

const Generator = () => {
  const [config, setConfig] = useState(defaultConfig);
  const [computedPath, setComputedPath] = useState(waveInit(config));
  const [gradientColors, setGradientColors] = useState({
    first: "#002bdc",
    last: "#32ded4",
  });
  const svgRef = useRef();
  const { show } = useModal();

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

  const handleGradientChange = useCallback(
    (changedGradient) => {
      setGradientColors((prev) => {
        return { ...prev, ...changedGradient };
      });
    },
    [setGradientColors],
  );

  const randomize = useCallback(() => {
    setComputedPath(waveInit(config));
  }, [setComputedPath, config]);

  const download = useCallback(() => {
    show(svgRef.current);
  }, [show]);

  return (
    <div className="relative bg-gray-100 px-2 pt-12 pb-16 box-border sm:px-8">
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row">
        <Canvas
          forwardedRef={svgRef}
          computedPath={computedPath}
          gradientColors={gradientColors}
        />
        <Panel
          config={config}
          handleConfigChange={handleConfigChange}
          gradient={gradientColors}
          handleGradientChange={handleGradientChange}
          randomize={randomize}
          download={download}
        />
      </div>
    </div>
  );
};

export default Generator;
