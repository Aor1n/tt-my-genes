import React from 'react';
import {RootStackComponent} from '../../navigation/types.ts';
import {SCREEN} from '../../navigation/consts.ts';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button.tsx';
import {View} from 'react-native';
import getStylesHook from '../../helpers/getStylesHook.ts';
import Container from '../../components/Container.tsx';
import Input from '../../components/Input.tsx';

const LoginScreen: RootStackComponent<typeof SCREEN.LOGIN> = () => {
  const {navigate} = useNavigation();
  const {styles} = useStyles();

  const onPress = () => navigate(SCREEN.ROOT_BOTTOM_TABS);

  return (
    <Container style={styles.container}>
      <View style={styles.inputContainer}>
        {/*<Input placeholder={'Enter name'} isFullBordered />*/}
      </View>
      <Button title={'Login'} isLoading={false} onPress={onPress} />
    </Container>
  );
};

const useStyles = getStylesHook(_ => ({
  container: {
    paddingBottom: 28,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 60,
  },
}));

export default LoginScreen;
