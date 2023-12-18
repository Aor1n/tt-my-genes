import React from 'react';
import {View} from 'react-native';
import {useAppSelector} from 'store/hooks.ts';
import getStylesHook from 'utils/getStylesHook.ts';
import TextField from 'components/inputs/TextField.tsx';

const ProfileName = () => {
  const {styles} = useStyles();

  const fullName = useAppSelector(state => state.profile.fullName);

  const isLastNameShown = useAppSelector(state => state.global.isModalShown);

  const names = fullName.split(' ');
  return (
    <View style={styles.container}>
      <TextField>
        {`${names.at(0)} ${isLastNameShown ? ' ' + names.at(-1) : ''}`}
      </TextField>
    </View>
  );
};

const useStyles = getStylesHook(_ => ({
  container: {
    marginTop: 20,
    alignItems: 'center',
  },
}));

export default ProfileName;
