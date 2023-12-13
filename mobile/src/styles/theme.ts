import {DefaultTheme, Theme} from '@react-navigation/native';

interface CustomTheme extends Omit<Theme, 'colors'> {
  colors: {
    primary: '#5B58AD';
    secondary: '#455EFF';
    black: '#000000';
    white: '#FFFFFF';
    bg: '#fcfbfc';
    text: '#3E3E3E';
    textInverted: '#FFFFFF';
    textPlaceholder: '#AAA9C0';
    border: '#BFBFBF';
  };
}

const theme: CustomTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#5B58AD',
    secondary: '#455EFF',
    black: '#000000',
    white: '#FFFFFF',
    bg: '#fcfbfc',
    text: '#3E3E3E',
    textInverted: '#FFFFFF',
    textPlaceholder: '#AAA9C0',
    border: '#BFBFBF',
  },
};

export {theme, type CustomTheme};
