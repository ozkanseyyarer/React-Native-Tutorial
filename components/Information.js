import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Information({title, imageSource, desc}) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={imageSource} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.textDesc}>{desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: 100, // veya istediğiniz bir yükseklik
  },
  textContainer: {
    marginTop: 10, // İstediğiniz bir boşluk
    marginBottom: 50,
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
  },
  textdesc: {
    fontSize: 23,
  },
});
