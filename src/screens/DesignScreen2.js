import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

export default function DesignScreen2() {
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
              alignSelf: 'flex-end',
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
              alignSelf: 'center',
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
