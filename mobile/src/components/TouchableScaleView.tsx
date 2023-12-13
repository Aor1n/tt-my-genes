import React from 'react';
import TouchableScale from 'react-native-touchable-scale';

export interface TouchableScaleViewProps
  extends React.ComponentPropsWithoutRef<typeof TouchableScale> {}

const TouchableScaleView = (props: TouchableScaleViewProps) => (
  <TouchableScale activeScale={0.92} friction={10} tension={15} {...props} />
);

export default TouchableScaleView;
