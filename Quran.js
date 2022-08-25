import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function Quran() {
  return (
    <WebView 
      style={styles.container}
      //source={{ uri: 'https://www.kidsqurantutoring.com/downloads/Holy-Quran.pdf' }}
      source={{ uri: 'https://quran.com/page/1' }}
      //source={{ uri: 'E:/1st Internship/Tajweed-App---/Tajweed-app/Holy-Quran' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
