import { useRecoilState } from "recoil";
import { computedPathAtom, gradientColorsAtom } from "../../atoms/Wavy";

const Canvas = ({ forwardedRef }) => {
  const [computedPath] = useRecoilState(computedPathAtom);
  const [gradientColors] = useRecoilState(gradientColorsAtom);

  return (
    <div className="absolute bottom-0 left-0 w-full">
      <svg
        ref={forwardedRef}
        width="100%"
        height="100%"
        viewBox={`0 0 1440 ${computedPath.svg.height}`}
        xmlns={computedPath.svg.xmlns}
        className="f-full transition duration-500 ease-in-out delay-150"
      >
        {computedPath.svg.path.map((path, i) => {
          const uniqueId = "_" + Math.random().toString(36).substr(2, 9);
          return (
            <g key={i}>
              <defs>
                <linearGradient id={uniqueId}>
                  <stop
                    offset="5%"
                    stopColor={gradientColors.first}
                    stopOpacity={(i + 1) / computedPath.svg.path.length}
                  />
                  <stop
                    offset="95%"
                    stopColor={gradientColors.last}
                    stopOpacity={(i + 1) / computedPath.svg.path.length}
                  />
                </linearGradient>
              </defs>
              <path
                d={path.d}
                stroke={path.strokeColor}
                strokeWidth={path.strokeWidth}
                fill={`url(#${uniqueId})`}
                className="transition-all duration-500 ease-in-out"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default Canvas;
