export const colors = {
  primary: '#64B5F6',
  primaryLight: "#9BE7FF",
  primaryDark: '#2286C3',
  secondary: '#00838F',
  secondaryDark: '#4FB3BF',
  secondaryLight: '#000562',
  textPrimary: '#212121',
  textSecondary: '#FAFAFA'
}

const gridValues = {
  gutter: 30
}

export const grid = {
  gutter: {
    base: `${gridValues.gutter}px`,
    sized: (multiplier) => `${gridValues.gutter * multiplier}px`
  }
}

export const fonts = {
  sizes: {
    title: '42px',
    subtitle: '20px'
  },
  weight: {
    light: 300,
    normal: 500,
    bold: 700
  }
}

export const viewports = {
  mobile: '@media (max-width: 640px)'
}
