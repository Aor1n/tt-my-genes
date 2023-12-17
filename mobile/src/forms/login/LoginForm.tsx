import Container from 'components/containers/Container.tsx';
import {Keyboard, Pressable, View} from 'react-native';
import Button from 'components/buttons/Button.tsx';
import React from 'react';
import getStylesHook from 'utils/getStylesHook.ts';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from 'navigation/consts.ts';
import useLoginForm from 'forms/login/useLoginForm.ts';
import Input from 'components/inputs/Input.tsx';
import {useAppDispatch} from 'store/hooks.ts';
import {setFullName} from 'store/actions/profile.ts';

const LoginForm = () => {
  const {navigate} = useNavigation();
  const {styles} = useStyles();
  const dispatch = useAppDispatch();
  const {form, handleSubmit} = useLoginForm({
    onSuccessfulSubmit: () => {
      dispatch(setFullName(form.watch('fullName')));
      form.reset();
      navigate(SCREEN.ROOT_BOTTOM_TABS);
    },
  });

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.pressableContainer}>
      <Container style={styles.container}>
        <View style={styles.inputContainer}>
          <Input
            form={form}
            name={'fullName'}
            placeholder={'Enter name'}
            isFullBordered
          />
        </View>
        <Button title={'Login'} isLoading={false} onPress={handleSubmit} />
      </Container>
    </Pressable>
  );
};

const useStyles = getStylesHook(_ => ({
  pressableContainer: {
    flex: 1,
  },
  container: {
    paddingBottom: 28,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 60,
  },
}));

export default LoginForm;
