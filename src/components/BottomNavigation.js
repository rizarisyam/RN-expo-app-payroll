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
import AdditionNavigator from '../navigator/AdditionNavigator'
import AddButtonSheet from './AddBottomSheet'

export const containerRef = createRef()

const AddScreenComponent = () => null;

const BottomNavigation = () => {

    const tabBarOptions = {
        tabStyle: {
            justifyContent: 'center'
        }
    }

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: false, tabBarShowLabel: false,
                tabBarItemStyle: {
                    // backgroundColor: 'red',
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            }
            }>
                <Tab.Screen name='Home' component={HomeScreen}
                    options={{
                        headerShown: false,
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                            <MaterialIcons name='home' color={color} size={26} />
                        )
                    }}
                />



                <Tab.Screen
                    name='Addition'
                    component={AdditionNavigator}
                    options={{
                        tabBarButton: (props) => <AddButtonSheet {...props} />
                    }}
                />

                <Tab.Screen name='Account' component={AccountNavigator}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name='account' color={color} size={26} />
                        )
                    }}
                />
                <Tab.Screen name='Earning' component={EarningNavigator} options={{
                    tabBarLabel: 'Earning',
                    tabBarIcon: ({ color }) => (
                        <Fontisto name='wallet' color={color} size={26} />
                    )
                }} />

            </Tab.Navigator>
        </NavigationContainer >
    )
}

export default BottomNavigation;