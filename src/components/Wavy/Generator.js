import { useRef } from "react";
import Canvas from "./Canvas";

const Generator = () => {
  const svgRef = useRef();

  return <Canvas forwardedRef={svgRef} />;
};

export default Generator;
