import React from 'react';
import {View} from 'react-native';
import {RootStackComponent} from 'navigation/types.ts';
import {SCREEN} from 'navigation/consts.ts';
import Container from 'components/containers/Container.tsx';
import getStylesHook from 'helpers/getStylesHook.ts';
import Filters from 'screens/home/components/Filters.tsx';

const HomeScreen: RootStackComponent<typeof SCREEN.HOME> = () => {
  const {styles} = useStyles();

  return (
    <View style={styles.wrapper}>
      <Container>
        <Filters />
      </Container>
    </View>
  );
};

const useStyles = getStylesHook(theme => ({
  wrapper: {
    flex: 1,
    backgroundColor: theme.colors.bg,
  },
}));

export default HomeScreen;
