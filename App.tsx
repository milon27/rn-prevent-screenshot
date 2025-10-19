import React, { useEffect } from 'react';
import { Platform, Text, View } from 'react-native';
import ScreenGuardModule from 'react-native-screenguard';

export default function App() {
  useEffect(() => {
    const init = async () => {
      if (Platform.OS === 'android') {
        await ScreenGuardModule.registerWithoutEffect();
      } else {
        await ScreenGuardModule.register({
          backgroundColor: '#000000',
        });
      }
    };
    init();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>App</Text>
    </View>
  );
}
