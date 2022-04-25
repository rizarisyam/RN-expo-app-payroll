import { createRef } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { MaterialIcons, MaterialCommunityIcons, Fontisto } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'

const Tab = createBottomTabNavigator()
// const Tab = createMaterialBottomTabNavigator()

import HomeScreen from '../screens/Home'
import AccountNavigator from '../navigator/AccountNavigator'
import EarningNavigator from '../navigator/EarningNavigator'

export const containerRef = createRef()

const BottomNavigation = () => {
    return (
        <NavigationContainer ref={containerRef}>


            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name='Home' component={HomeScreen}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name='home' color={color} size={26} />
                        )
                    }}
                >

                </Tab.Screen>
                <Tab.Screen name='Account' component={AccountNavigator}
                    options={{
                        tabBarLabel: 'Account',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name='account' color={color} size={26} />
                        )
                    }}
                ></Tab.Screen>
                <Tab.Screen name='Earning' component={EarningNavigator} options={{
                    tabBarLabel: 'Earning',
                    tabBarIcon: ({ color }) => (
                        <Fontisto name='wallet' color={color} size={26} />
                    )
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomNavigation;