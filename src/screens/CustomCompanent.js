import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CardFile from '../../components/CardFile';

export default function CustomCompanent() {
  return (
    <View style={styles.container}>
      <CardFile
        isim="Jhon Doe"
        söz="Lorem ipsum dolor sit amet"
        buton="I LIKED"
      />

      <CardFile
        isim="Jhon Doe"
        söz="Lorem ipsum dolor sit amet"
        buton="I LIKED"
      />

      <CardFile
        isim="Jhon Doe"
        söz="Lorem ipsum dolor sit amet"
        buton="I LIKED"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bcbbbd',
    padding: 20,
  },
});
