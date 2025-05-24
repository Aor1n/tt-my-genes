import React from 'react';
import {View} from 'react-native';
import {
  useSharedValue,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {ReText} from 'react-native-redash';
import {useEffectOnce} from 'hooks/useEffectOnce.ts';

interface AnimatedAmountProps {
  value: number;
}

function AnimatedAmount({value}: AnimatedAmountProps) {
  const progress = useSharedValue(0);

  useEffectOnce(() => {
    progress.value = withTiming(value, {
      duration: Number(value.toString().length) * 100,
    });
  });

  const animatedText = useDerivedValue(() => {
    return `${Math.floor(progress.value)}`;
  });

  return (
    <View>
      <ReText text={animatedText} />
    </View>
  );
}

export default AnimatedAmount;
