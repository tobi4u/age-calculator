
module.exports = {
    theme: {
      extend: {
        colors: {
          // Add any custom colors you might need
          'Off white': 'hsl(0, 0%, 94%)', 'White': 'hsl(0, 0%, 100%)',
          'Smokey grey': 'hsl(0, 1%, 44%)',
'Off black':'hsl(0, 0%, 8%)',
        },
      },
    },
    variants: {},
    plugins: [
      function({ addUtilities }) {
        addUtilities({
          '.text-outline': {
            '-webkit-text-stroke-width': '1px',
            '-webkit-text-stroke-color': 'currentColor',
            'color': 'transparent',
          },
        }, ['responsive', 'hover']);
      },
    ],
  }
  