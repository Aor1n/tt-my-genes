import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackComponent} from 'navigation/types.ts';
import {SCREEN} from 'navigation/consts.ts';

const ProfileScreen: RootStackComponent<typeof SCREEN.PROFILE> = () => {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;
