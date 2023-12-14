import {useTheme} from '@react-navigation/native';
import {CustomTheme} from 'styles/theme.ts';

const useCustomTheme = () => {
  const theme = useTheme();

  return theme as unknown as CustomTheme;
};

export default useCustomTheme;
