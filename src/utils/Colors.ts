export const getRandomColor = () => {
  const colors = [
    16777215,
    5793266,
    10070709,
    2895667,
    2303786,
    5763719,
    16705372,
    15418782,
    15548997,
    16777215,
    2303786,
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};
