import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Lifecycle() {

    const [number, setNumber] = useState(0) ;
    const [counter, setCounter] = useState(0) ;

    useEffect(()=>{
        console.log("number: " + number)

    },[number]);



    
    useEffect(()=>{
        console.log("counter: " + number)

    },[number])

  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>number: {number}</Text>
      <Button title="Sayı Arttır" onPress={() => setNumber(number + 1)} />

      
      <Text style={{marginTop:20}}>counter: {number}</Text>
      <Button title="Counter Arttır" onPress={() => setNumber(number + 100)} />
    </View>
  )
}

const styles = StyleSheet.create({})