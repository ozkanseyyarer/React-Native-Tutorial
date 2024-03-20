import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function DesignScreen4() {
  return (
    <View>
      <ScrollView>
        <View
          style={{
            borderColor: 'red',
            borderWidth: 7,
            height: 400,
          }}>
          <Text
            style={{
              padding: 20,
              margin: 2,
              backgroundColor: 'red',
              borderRadius: 23,
              borderColor: 'black',
              borderWidth: 5,
              position: 'absolute',

              right: 0,
              top: 0,
            }}>
            Sağ üst Köşe
          </Text>
          <Text
            style={{
              padding: 20,
              margin: 2,
              backgroundColor: 'red',
              borderRadius: 23,
              borderColor: 'black',
              borderWidth: 5,
              position: 'absolute',
              left: 0,
              bottom: 0,
            }}>
            Sol Alt Köşe
          </Text>
          <Text
            style={{
              padding: 20,
              margin: 2,
              backgroundColor: 'red',
              borderRadius: 23,
              borderColor: 'black',
              borderWidth: 5,
              position: 'absolute',
              left: 0,
              top: 0,
            }}>
            Sol Üst Köşe
          </Text>
          <Text
            style={{
              padding: 20,
              margin: 2,
              backgroundColor: 'red',
              borderRadius: 23,
              borderColor: 'black',
              borderWidth: 5,
              position: 'absolute',
              right: 0,
              bottom: 0,
            }}>
            Sağ Alt Köşe
          </Text>
          <Text
            style={{
              padding: 20,
              margin: 2,
              backgroundColor: 'red',
              borderRadius: 23,
              borderColor: 'black',
              borderWidth: 5,
              position: 'absolute',
              right: '100%',
              bottom: '100%',
              top: '100%',
              left: '100%',
            }}>
            Sağ Alt Köşe
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
