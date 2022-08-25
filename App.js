import ContactYoutube from './ContactYoutube';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Quran from './Quran';
import Speak from './Speak';
import Calendar1 from './Calendar1';
import Counter1 from './Counter1';
import Result from './Result';
import HomeScreen from './src/screens/home.screen';
import DetailScreen from './src/screens/detail.screen';
import React from 'react';
import { View} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import About from './About';

const App =()=> {
  
  const Stack = createNativeStackNavigator();
  return ( 
    
   
    <NavigationContainer >
      <View>
      <StatusBar style="light" />
    </View>
    
      <Stack.Navigator initialRouteName="LOGIN-FORM" 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2c93b0',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize:40,
        },
      }}>
        <Stack.Screen name='LOGIN-FORM' component={ContactYoutube} options={{title:"التجويد",headerTitleAlign:"center"}}/>
        <Stack.Screen name='HOME-PAGE' component={Home} options={{title:"التجويد",headerTitleAlign:"center"}} />
        <Stack.Screen name='CALENDAR-PAGE' component={Calendar1} options={{title:"التجويد",headerTitleAlign:"center"}}/>
        <Stack.Screen name='COUNTER-PAGE' component={Counter1}options={{title:"التجويد",headerTitleAlign:"center"}} />
        <Stack.Screen name='ABOUT-PAGE' component={About} options={{title:"التجويد",headerTitleAlign:"center"}} /> 
        <Stack.Screen name='QURAN-PAGE' component={Quran}options={{title:"التجويد",headerTitleAlign:"center"}} />
        <Stack.Screen name='SPEAK-PAGE' component={Speak} options={{title:"التجويد",headerTitleAlign:"center"}}/>
        <Stack.Screen name='RESULT-PAGE' component={Result} options={{title:"التجويد",headerTitleAlign:"center"}}/>
        <Stack.Screen name={'POPULARSURAT'} component={HomeScreen} options={{title:"التجويد",headerTitleAlign:"center"}}/>
        <Stack.Screen name={'Detail'} component={DetailScreen}options={{title:"التجويد",headerTitleAlign:"center"}} />
      </Stack.Navigator>
  
    </NavigationContainer>
    

  );
 
};

export default App;


