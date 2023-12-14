import Container from 'components/Container.tsx';
import {View} from 'react-native';
import Button from 'components/Button.tsx';
import React from 'react';
import getStylesHook from 'helpers/getStylesHook.ts';
import {useNavigation} from '@react-navigation/native';
import {SCREEN} from 'navigation/consts.ts';
import useLoginForm from 'forms/login/useLoginForm.ts';
import Input from 'components/Input.tsx';
import {useAppDispatch} from 'store/hooks.ts';
import {setFullName} from 'store/actions/profile.ts';

const LoginForm = () => {
  const {navigate} = useNavigation();
  const {styles} = useStyles();
  const dispatch = useAppDispatch();
  const {form, handleSubmit} = useLoginForm({
    onSuccessfulSubmit: () => {
      dispatch(setFullName(form.watch('fullName')));
      navigate(SCREEN.ROOT_BOTTOM_TABS);
    },
  });

  return (
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

export default LoginForm;
