import {DefaultTheme, Theme} from '@react-navigation/native';

interface CustomTheme extends Omit<Theme, 'colors'> {
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    black: '#000';
  };
}

const theme: CustomTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    black: '#000',
  },
};

export {theme, type CustomTheme};
