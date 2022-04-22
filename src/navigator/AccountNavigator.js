
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AccountStack = createNativeStackNavigator()

import PersonalData from '../screens/account/PersonalData'
import AccountScreen from '../screens/account/Account'

export default AccountNavigator = () => {
    return (
        <AccountStack.Navigator initialRouteName='AccountScreen'>
            <AccountStack.Screen name='AccountScreen' options={{ title: 'test', headerShown: false }} component={AccountScreen} />
            <AccountStack.Screen name='PersonalData' options={{ headerShown: true, title: 'Data Pribadi' }} component={PersonalData} />
        </AccountStack.Navigator>
    )
}