// export default {
//   h1: {
//     fontWeight: 500,
//     fontSize: 35,
//     letterSpacing: '-0.24px'
//   },
//   h2: {
//     fontWeight: 500,
//     fontSize: 29,
//     letterSpacing: '-0.24px'
//   },
//   h3: {
//     fontWeight: 500,
//     fontSize: 24,
//     letterSpacing: '-0.06px'
//   },
//   h4: {
//     fontWeight: 500,
//     fontSize: 20,
//     letterSpacing: '-0.06px'
//   },
//   h5: {
//     fontWeight: 500,
//     fontSize: 16,
//     letterSpacing: '-0.05px'
//   },
//   h6: {
//     fontWeight: 500,
//     fontSize: 14,
//     letterSpacing: '-0.05px'
//   },
//   overline: {
//     fontWeight: 500
//   }
// };
function pxToRem(value) {
  return `${value / 16}rem`;
}
const typography = {
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontFamily: [
    'Prompt',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  h1: {
    fontWeight: 700,
    fontSize: pxToRem(24),
  },
  h2: {
    fontWeight: 600,
    fontSize: pxToRem(22),
  },
  h3: {
    fontWeight:600,
    fontSize: pxToRem(16),

  },
  h4: {
    fontWeight: 500,
    fontSize: pxToRem(14),

 },
 h5: {
  fontWeight: 500,
  fontSize: pxToRem(12),

},
h6: {
  fontWeight: 500,
  fontSize: pxToRem(10),

},
subtitle1: {
  fontWeight: 600,
  fontSize: pxToRem(16)
},
  subtitle2: {
    fontWeight: 500,
    fontSize: pxToRem(14)
  },
  body1: {
    fontWeight: 400,
    fontSize: pxToRem(16)
  },
  body2: {
    fontWeight: 400,
    fontSize: pxToRem(14)
  },
  body3: {
    fontWeight: 800,
    fontSize: pxToRem(20)
  },
  
  /* Standard config */
  // h1: {
  //   fontWeight: 500,
  //   fontSize: 35,
  //   letterSpacing: '-0.24px'
  // },
  // h2: {
  //   fontWeight: 500,
  //   fontSize: 29,
  //   letterSpacing: '-0.24px'
  // },
  // h3: {
  //   fontWeight: 500,
  //   fontSize: 24,
  //   letterSpacing: '-0.06px'
  // },
  // h4: {
  //   fontWeight: 500,
  //   fontSize: 20,
  //   letterSpacing: '-0.06px'
  // },
  // h5: {
  //   fontWeight: 500,
  //   fontSize: 16,
  //   letterSpacing: '-0.05px'
  // },
  // h6: {
  //   fontWeight: 500,
  //   fontSize: 14,
  //   letterSpacing: '-0.05px'
  // },
  // overline: {
  //   fontWeight: 500
  // }

  /* Advance config */
  // h1: {
  //   fontWeight: 500,
  //   lineHeight: 80 / 64,
  //   fontSize: pxToRem(40),
  //   ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 })
  // },
  // h2: {
  //   fontWeight: 500,
  //   lineHeight: 64 / 48,
  //   fontSize: pxToRem(24),
  //   ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 })
  // },
  // h3: {
  //   fontWeight: 500,
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(22),
  //   ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 })
  // },
  // h4: {
  //   fontWeight: 500,
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(18),
  //   letterSpacing: 0.5,
  //   ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  // },
  // h5: {
  //   fontWeight: 500,
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(17),
  //   ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 })
  // },
  // h6: {
  //   fontWeight: 500,
  //   lineHeight: 28 / 18,
  //   fontSize: pxToRem(16),
  //   ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 })
  // },
  // subtitle1: {
  //   fontWeight: 600,
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(16)
  // },
  // subtitle2: {
  //   fontWeight: 600,
  //   lineHeight: 22 / 14,
  //   fontSize: pxToRem(14)
  // },
  // body1: {
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(16)
  // },
  // body2: {
  //   lineHeight: 22 / 14,
  //   fontSize: pxToRem(14)
  // },
  // caption: {
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(12)
  // },
  // overline: {
  //   fontWeight: 700,
  //   lineHeight: 1.5,
  //   fontSize: pxToRem(12),
  //   letterSpacing: 1.1,
  //   textTransform: 'uppercase'
  // },
  button: {
  //   fontWeight: 700,
  //   lineHeight: 24 / 14,
  //   fontSize: pxToRem(14),
  //   textTransform: 'capitalize'
  }
};

export default typography;
