import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { PickerIOSComponent, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const name = "ruthvik";

  if(name == "ruthvik") {
    console.log("you are ",name);
  } else {
    console.log("you are not verified");
  }

  return (
    <View style={styles.container}>
      <Text>Hello my name is Ruthvik Bemidi</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
