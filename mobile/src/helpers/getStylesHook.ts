import {StyleSheet} from 'react-native';
import {useMemo} from 'react';
import {CustomTheme} from '../styles/theme.ts';
import useCustomTheme from '../hooks/useCustomTheme.ts';

type StyleSheetInfer = ReturnType<typeof StyleSheet.create>;

const getStylesHook = <U, T extends StyleSheetInfer = StyleSheetInfer>(
  cb: (theme: CustomTheme, arg?: U) => T,
): ((arg?: U) => {styles: T; theme: CustomTheme}) => {
  return (arg?: U) => {
    const theme = useCustomTheme();

    return useMemo(
      () => ({
        styles: cb(theme, arg),
        theme,
      }),
      [theme, arg],
    );
  };
};

export default getStylesHook;
