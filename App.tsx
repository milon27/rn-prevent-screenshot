import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import ScreenGuardModule from 'react-native-screenguard';

export default function App() {
  useEffect(() => {
    const init = async () => {
      await ScreenGuardModule.register({
        backgroundColor: '#000000',
      });
    };
    init();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>App</Text>
    </View>
  );
}
