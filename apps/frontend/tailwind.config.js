const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {

    extend: {
      colors: {
        "c-1": "#0A1014",
        "c-2": "#141F28",
        "c-3": "#1E2F3D",
        "c-4": "#283E51",
        "c-5": "#334E65",
        "c-6": "#3D5E79",
        "c-7": "#476D8D",
        "c-8": "#517DA2",
        "c-9": "#5B8CB6",
        "c-10": "#659CCA"
      }
    },
  },
  plugins: [],
};