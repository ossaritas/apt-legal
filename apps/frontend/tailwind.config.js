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
        "c-1": "#001233",
        "c-2": "#001845",
        "c-3": "#002855",
        "c-4": "#023e7d",
        "c-5": "#0353a4",
        "c-6": "#0466c8",
        "c-7": "#979dac",
        "c-8": "#7d8597",
        "c-9": "#5c677d",
        "c-10": "#33415c"
      }
    },
  },
  plugins: [],
};