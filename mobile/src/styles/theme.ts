import {DefaultTheme, Theme} from '@react-navigation/native';

interface CustomTheme extends Omit<Theme, 'colors'> {
  colors: {
    primary: '#5B58AD';
    secondary: '#455EFF';
    error: '#FF0000';
    black: '#000000';
    white: '#FFFFFF';
    grey: '#696969';
    bg: '#fcfbfc';
    text: '#3E3E3E';
    textInverted: '#FFFFFF';
    textPlaceholder: '#AAA9C0';
    border: '#BFBFBF';
    divider: '#e8e7e7';
  };
}

const theme: CustomTheme & Theme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5B58AD',
    secondary: '#455EFF',
    error: '#FF0000',
    black: '#000000',
    white: '#FFFFFF',
    grey: '#696969',
    bg: '#fcfbfc',
    text: '#3E3E3E',
    textInverted: '#FFFFFF',
    textPlaceholder: '#AAA9C0',
    border: '#BFBFBF',
    divider: '#e8e7e7',
  },
};

export {theme, type CustomTheme};
