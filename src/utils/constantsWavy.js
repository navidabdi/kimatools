export const heightRange = {
  min: 200,
  max: 800,
  step: 100,
};

export const complexityRange = {
  min: 2,
  max: 10,
  step: 1,
};

export const layersCountRange = {
  min: 2,
  max: 6,
  step: 1,
};

export const defaultConfig = {
  width: 1440,
  height: (heightRange.max + heightRange.min) / 2,
  segmentCount: (complexityRange.max + complexityRange.min) / 2,
  layersCount: (layersCountRange.max + layersCountRange.min) / 2,
  variance: 0.75,
  strokeWidth: 0,
  fillColor: "#fff0080",
  strokeColor: "none",
};

export const gradientTempltates = [
  {
    first: "#d00117",
    last: "#1d2acf",
  },
  {
    first: "#1dcf58",
    last: "#01d0ae",
  },
  {
    first: "#1d78cf",
    last: "#01d0ae",
  },
  {
    first: "#d00141",
    last: "#1d78cf",
  },
];
