import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackComponent} from 'navigation/types.ts';
import {SCREEN} from 'navigation/consts.ts';

const HomeScreen: RootStackComponent<typeof SCREEN.HOME> = () => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
