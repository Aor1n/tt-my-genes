import React from 'react';
import ErrorBoundary, {ErrorBoundaryProps} from 'react-native-error-boundary';
import {DimensionValue, View} from 'react-native';
import Button from 'components/buttons/Button.tsx';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import getStylesHook from 'utils/getStylesHook.ts';
import TextField from 'components/inputs/TextField.tsx';

const ErrorFallback = (props: {error: Error; resetError: () => void}) => {
  const {top} = useSafeAreaInsets();
  const {styles} = useStyles(top);

  return (
    <View style={styles.container}>
      <TextField>Something happened!</TextField>
      <TextField>{props.error.toString()}</TextField>
      <Button
        onPress={props.resetError}
        title={'Try again'}
        isLoading={false}
      />
    </View>
  );
};

const ErrorBoundaryProvider = ({
  children,
}: Pick<ErrorBoundaryProps, 'children'>) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, stackTrace) => {
        /* Log the error to an error reporting service */
        console.error(error, stackTrace);
      }}>
      {children}
    </ErrorBoundary>
  );
};

const useStyles = getStylesHook<DimensionValue | undefined>(
  (_, paddingTop) => ({
    container: {paddingTop},
  }),
);

export default ErrorBoundaryProvider;
