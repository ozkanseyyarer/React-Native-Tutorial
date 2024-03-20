import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';
import CoursesInformationScreen from './src/screens/CoursesInformationScreen';
import CounterScreen from './src/screens/CounterScreen';
import CounterScreen2 from './src/screens/CounterScreen2';
import BoxScreen from './src/screens/BoxScreen';
import ColorChangeScreen from './src/screens/ColorChangeScreen';
import PasswordScreen from './src/screens/PasswordScreen';
import DesignScreen from './src/screens/DesignScreen';
import DesignScreen2 from './src/screens/DesignScreen2';
import DesignScreen3 from './src/screens/DesignScreen3';
import DesignScreen4 from './src/screens/DesignScreen4';
import CustomCompanent from './src/screens/CustomCompanent';
import UseState1 from './src/screens/UseState1';
import UseState2 from './src/screens/UseState2';
import Lifecycle from './src/screens/Lifecycle';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Courses" component={CoursesScreen} />
        <Stack.Screen
          name="Kurs Bilgileri"
          component={CoursesInformationScreen}
        />
        <Stack.Screen name="Sayaç Uygulaması" component={CounterScreen} />
        <Stack.Screen name="Sayaç Uygulaması2" component={CounterScreen2} />
        <Stack.Screen name="Kutu Uygulaması" component={BoxScreen} />
        <Stack.Screen name="Renk Değiştir" component={ColorChangeScreen} />
        <Stack.Screen name="Şifre ekranı" component={PasswordScreen} />
        <Stack.Screen name="Dizayn Ekranı" component={DesignScreen} />
        <Stack.Screen name="Dizayn Ekranı2" component={DesignScreen2} />
        <Stack.Screen name="Dizayn Ekranı3" component={DesignScreen3} />
        <Stack.Screen name="Dizayn Ekranı4" component={DesignScreen4} />
        <Stack.Screen name="Custom Companent" component={CustomCompanent} />
        <Stack.Screen name="Use state" component={UseState1} />
        <Stack.Screen name="Use state2" component={UseState2} />
        <Stack.Screen name="Lifecycle" component={Lifecycle} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
