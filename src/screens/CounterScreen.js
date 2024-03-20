import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useState} from 'react';

export default function CounterScreen() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={{padding: 20}}>
      <Button
        title="Arttır"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />
      <View style={{marginBottom: 20}} />
      <Button
        title="Azalt"
        onPress={() => {
          setCounter(counter - 1);
        }}
      />

      <Text>Sayı: {counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
