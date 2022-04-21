
import * as React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../screens/Home'
import AccountPage from '../screens/Account'

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Account' component={AccountPage} />
        </Tab.Navigator>
    )
}

export default Tabs;