import React from 'react';
import {Text} from 'react-native';
import {RootStackComponent} from 'navigation/types.ts';
import {SCREEN} from 'navigation/consts.ts';
import Container from 'components/containers/Container.tsx';

const ProfileScreen: RootStackComponent<typeof SCREEN.PROFILE> = () => {
  return (
    <Container>
      <Text>Profile</Text>
    </Container>
  );
};

export default ProfileScreen;
