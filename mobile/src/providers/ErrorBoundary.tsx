import React from 'react';
import ErrorBoundary, {ErrorBoundaryProps} from 'react-native-error-boundary';
import {Text, View} from 'react-native';
import Button from 'components/buttons/Button.tsx';

const ErrorFallback = (props: {error: Error; resetError: () => void}) => (
  <View>
    <Text>Something happened!</Text>
    <Text>{props.error.toString()}</Text>
    <Button onPress={props.resetError} title={'Try again'} isLoading={false} />
  </View>
);

const ErrorBoundaryProvider = ({children}: ErrorBoundaryProps) => {
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

export default ErrorBoundaryProvider;
