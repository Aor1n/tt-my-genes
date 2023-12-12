import React from 'react';
import {RootStackComponent} from '../../navigation/types.ts';
import {SCREEN} from '../../navigation/consts.ts';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TouchableScaleView from '../../components/TouchableScaleView.tsx';
import {SafeAreaView} from 'react-native-safe-area-context';

const LoginScreen: RootStackComponent<typeof SCREEN.LOGIN> = () => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView>
      <TouchableScaleView
        style={{backgroundColor: 'grey', height: 50}}
        onPress={() => navigate(SCREEN.ROOT_BOTTOM_TABS)}>
        <Text>Login</Text>
      </TouchableScaleView>
    </SafeAreaView>
  );
};

export default LoginScreen;
