import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Init</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
