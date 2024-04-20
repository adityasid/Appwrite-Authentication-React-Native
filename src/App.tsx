import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AppwriteProvider} from './appwrite/AppwriteContext';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/Splash/Splash';
import Login from './screens/Login/Login';
import Signup from './screens/Signup/Signup';
import Home from './screens/Home/Home';
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <AppwriteProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppwriteProvider>
  );
}

export default App;
