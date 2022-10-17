/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    // BUG复现:'.src/components/**/*.{js,ts,jsx,tsx}',
    //有病吧。。。为什么写了这么久都没事突然就bug了真摸不到头脑排查了贼久
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    logs: false,
  },
}
