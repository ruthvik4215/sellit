import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { PickerIOSComponent, StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {

  const name = "ruthvik";

  if(name == "ruthvik") {
    console.log("you are ",name);
  } else {
    console.log("you are not verified");
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello my name is Ruthvik Bemidi</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
