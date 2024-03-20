import {StyleSheet, Text, View, Button} from 'react-native';
import React, {useReducer} from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + action.payload,
      };

    case 'decrement':
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      state;
  }
};
//
export default function CounterScreen() {
  const [state, dispatch] = useReducer(reducer, {count: 0});
  return (
    <View style={{padding: 20}}>
      <Button
        title="Arttır"
        onPress={() => {
          dispatch({type: 'increment', payload: 1});
        }}
      />
      <View style={{marginBottom: 20}} />
      <Button
        title="Azalt"
        onPress={() => {
          dispatch({type: 'decrement', payload: 1});
        }}
      />
      <Text>Sayı: {state.count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
