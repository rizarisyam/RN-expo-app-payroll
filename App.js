import * as React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const Tab = createMaterialBottomTabNavigator()

import Home from './src/screens/Home'
import AccountPage from './src/screens/Account'

import AccountNavigator from './src/navigator/AccountNavigator'
import EarningNavigator from './src/navigator/EarningNavigator'

import BottomNavigation from './src/components/BottomNavigation'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { PortalProvider, PortalHost } from '@gorhom/portal'

import BottomSheet from './src/components/AddBottomSheet'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>

        <PortalProvider>
          <BottomNavigation />
          <PortalHost name='BottomSheetPortaHost' />
        </PortalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>

    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Home'>
    //     <Stack.Screen name='Home' component={Home} options={{ headerShown: false, contentStyle: { paddingTop: StatusBar.currentHeight } }} />
    //     {/* <Stack.Screen name='Account' component={AccountPage} /> */}
    //     <Stack.Screen name='Account' options={{ headerShown: false }} component={AccountNavigator} />
    //     <Stack.Screen name='Earning' options={{ headerShown: false }} component={EarningNavigator} />
    //   </Stack.Navigator>
    // </NavigationContainer >
    // <NavigationContainer>

    //   <Tab.Navigator>
    //     <Tab.Screen name='Home' component={Home} />
    //     <Tab.Screen name='Account' component={AccountPage} />
    //   </Tab.Navigator>
    // </NavigationContainer>
  )
}

export default App;