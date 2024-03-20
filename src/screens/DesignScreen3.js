import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

export default function DesignScreen3() {
  return (
    <View>
      <ScrollView>
        <View
          style={{
            borderColor: 'red',
            borderWidth: 7,
            height: 400,
          }}>
          <View
            style={{
              margin: 2,
              width: 100,
              height: 50,
              backgroundColor: 'red',
              borderRadius: 23,
              borderColor: 'black',
              borderWidth: 5,
              top: 55,
              left: 255,
            }}
          />

          <View
            style={{
              margin: 2,
              width: 100,
              height: 50,
              backgroundColor: 'yellow',
              borderRadius: 23,
              borderColor: 'black',
              borderWidth: 5,
              left: 55,
            }}
          />

          <View
            style={{
              margin: 2,
              width: 100,
              height: 50,
              backgroundColor: 'green',
              borderRadius: 23,
              borderColor: 'black',
              borderWidth: 5,
              left: 155,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
