import React from 'react';
import {RootStackComponent} from '../../navigation/types.ts';
import {SCREEN} from '../../navigation/consts.ts';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const ProfileScreen: RootStackComponent<typeof SCREEN.PROFILE> = () => {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;
