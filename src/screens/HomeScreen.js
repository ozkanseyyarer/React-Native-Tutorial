import {StyleSheet, Text, View, Button, ScrollView} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}) {
  return (
    <ScrollView>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Ana Ekran</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Courses')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Kurs Bilgileri Sayfasına Git"
            onPress={() => navigation.navigate('Kurs Bilgileri')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Sayaç Uygulamasına Git"
            onPress={() => navigation.navigate('Sayaç Uygulaması')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="2.Sayaç Uygulamasına Git"
            onPress={() => navigation.navigate('Sayaç Uygulaması2')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Rastgele Kutu Uygulaması"
            onPress={() => navigation.navigate('Kutu Uygulaması')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Renk Değiştir"
            onPress={() => navigation.navigate('Renk Değiştir')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Şifre ekranı"
            onPress={() => navigation.navigate('Şifre ekranı')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Dizayn Ekranı"
            onPress={() => navigation.navigate('Dizayn Ekranı')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Dizayn Ekranı 2"
            onPress={() => navigation.navigate('Dizayn Ekranı2')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Dizayn Ekranı 3"
            onPress={() => navigation.navigate('Dizayn Ekranı3')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Dizayn Ekranı 4"
            onPress={() => navigation.navigate('Dizayn Ekranı4')}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Custom Companent"
            onPress={() => navigation.navigate('Custom Companent')}
          />
        </View>


        <View style={styles.buttonContainer}>
          <Button
            title="Use state"
            onPress={() => navigation.navigate('Use state')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Use state2"
            onPress={() => navigation.navigate('Use state2')}
          />
        </View>


        <View style={styles.buttonContainer}>
          <Button
            title="Lifecycle"
            onPress={() => navigation.navigate('Lifecycle')}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '80%', 
    marginVertical: 10,
  },
});
