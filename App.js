import * as React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const Tab = createMaterialBottomTabNavigator()

import Home from './src/screens/Home'
import AccountPage from './src/screens/Account'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false, contentStyle: { paddingTop: StatusBar.currentHeight } }} />
        <Stack.Screen name='Account' component={AccountPage} />
      </Stack.Navigator>
    </NavigationContainer >
    // <NavigationContainer>

    //   <Tab.Navigator>
    //     <Tab.Screen name='Home' component={Home} />
    //     <Tab.Screen name='Account' component={AccountPage} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  )
}

export default App;