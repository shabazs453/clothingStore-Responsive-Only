/** @type {import('tailwindcss').Config} */
module.exports = {
      content: ["./index.html","./src/**/*.{js,jsx,ts,tsx}",],
      theme: {
            extend: {},
            screens: {
                  'max300': { 'max': '300px' },
                  // => @media (max-width: 300px) { ... }

                  'max410': { 'max': '410px' },
                  // => @media (max-width: 410px) { ... }

                  'max550': { 'max': '550px' },
                  // => @media (max-width: 550px) { ... }


                  'max650': { 'max': '650px' },
                  // => @media (max-width: 650px) { ... }

                  'max750': { 'max': '750px' },
                  // => @media (max-width: 750px) { ... }

                  'max850': { 'max': '850px' },
                  // => @media (max-width: 850px) { ... }

                  'max990': { 'max': '990px' },
                  // => @media (max-width: 990px) { ... }


                  'max1024': { 'max': '1024px' },
                  // => @media (max-width: 1024px) { ... }

                  'max1050': { 'max': '1050px' },
                  // => @media (max-width: 1050px) { ... }

                  'max1150': { 'max': '1150px' },
                  // => @media (max-width: 1150px) { ... }

                  'xl': { 'min': '1280px', 'max': '1535px' },
                  // => @media (min-width: 1280px and max-width: 1535px) { ... }

                  '2xl': { 'min': '1536px' },
                  // => @media (min-width: 1536px) { ... }

                  '3xl': { 'min': '2000px' },
                  // => @media (min-width: 2000px) { ... }
            },

      },
      plugins: [],
}

