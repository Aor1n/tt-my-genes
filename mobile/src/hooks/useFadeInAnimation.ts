import {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {useEffectOnce} from 'hooks/useEffectOnce.ts';

interface UseFadeInAnimationProps {
  duration: number;
  delay: number;
}

const useFadeInAnimation = ({duration, delay}: UseFadeInAnimationProps) => {
  const fadeAnim = useSharedValue(0);

  useEffectOnce(() => {
    fadeAnim.value = withDelay(delay, withTiming(1, {duration}));
  });

  const fadeInStyle = useAnimatedStyle(() => ({
    opacity: fadeAnim.value,
  }));

  return {fadeInStyle};
};

export default useFadeInAnimation;
