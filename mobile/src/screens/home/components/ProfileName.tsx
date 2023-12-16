import React from 'react';
import {Text, View} from 'react-native';
import {useAppSelector} from 'store/hooks.ts';
import getStylesHook from 'helpers/getStylesHook.ts';

const ProfileName = () => {
  const {styles} = useStyles();

  const fullName = useAppSelector(state => state.profile.fullName);

  const isLastNameShown = useAppSelector(state => state.global.isModalShown);

  const names = fullName.split(' ');
  return (
    <View style={styles.container}>
      <Text>
        {`${names.at(0)} ${isLastNameShown ? ' ' + names.at(-1) : ''}`}
      </Text>
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
