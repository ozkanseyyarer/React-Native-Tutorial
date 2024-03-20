import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';

export default function DesignScreen() {
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
              flex: 1, //%10 alan kaplar
              margin: 2,
              width: 200,
              height: 50,
              backgroundColor: 'red',
              borderRadius: 23,
              borderColor: 'black',
              borderWidth: 5,
            }}
          />

          <View
            style={{
              flex: 3, //%30 alan kaplar
              margin: 2,
              width: 200,
              height: 50,
              backgroundColor: 'red',
              borderRadius: 23,
              borderColor: 'black',
              borderWidth: 5,
            }}
          />

          <View
            style={{
              flex: 6, //%60 alan kaplar
              margin: 2,
              width: 200,
              height: 50,
              backgroundColor: 'red',
              borderRadius: 23,
              borderColor: 'black',
              borderWidth: 5,
            }}
          />
        </View>

        <View
          style={{
            borderColor: 'red',
            borderWidth: 7,
            height: 400,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              margin: 20,
              width: 50,
              height: 50,
              backgroundColor: 'red',
              borderRadius: 23,
              borderColor: 'black',
              borderWidth: 5,
            }}
          />

          <View
            style={{
              margin: 20,
              width: 50,
              height: 50,
              backgroundColor: 'red',
              borderRadius: 23,
              borderColor: 'black',
              borderWidth: 5,
            }}
          />

          <View
            style={{
              margin: 20,
              width: 50,
              height: 50,
              backgroundColor: 'red',
              borderRadius: 23,
              borderColor: 'black',
              borderWidth: 5,
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
