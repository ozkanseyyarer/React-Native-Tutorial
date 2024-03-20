import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function CardFile(props) {
  const {isim, söz, buton} = props;
  const showAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );
  return (
    <View style={styles.container}>
      <View style={styles.ustView}>
        <Text style={styles.isim}>{isim}</Text>
        <Text style={styles.cumle}>{söz}</Text>
      </View>
      <View style={styles.altView}>
        <TouchableOpacity style={styles.button} onPress={showAlert}>
          <Text style={styles.buttonText}>{buton}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginVertical: 20,
  },
  ustView: {
    flex: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
  },
  altView: {
    flex: 1,
  },
  isim: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
    margin: 20,
  },
  cumle: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#02b9ff',

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
