import React from 'react';
import {RootStackComponent} from '../../navigation/types.ts';
import {SCREEN} from '../../navigation/consts.ts';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen: RootStackComponent<typeof SCREEN.HOME> = () => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
