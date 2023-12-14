import React from 'react';
import {RootStackComponent} from 'navigation/types.ts';
import {SCREEN} from 'navigation/consts.ts';
import LoginForm from 'forms/login/LoginForm.tsx';

const LoginScreen: RootStackComponent<typeof SCREEN.LOGIN> = () => {
  return <LoginForm />;
};

export default LoginScreen;
