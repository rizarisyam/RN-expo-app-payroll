
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AccountStack = createNativeStackNavigator()

import PersonalData from '../screens/account/PersonalData'
import AccountScreen from '../screens/account/Account'
import AccountTaxes from '../screens/account/AccountTaxes'
import FileEmployees from '../screens/account/FileEmployees'

export default AccountNavigator = () => {
    return (
        <AccountStack.Navigator initialRouteName='AccountScreen'>
            <AccountStack.Screen name='AccountScreen' options={{ title: 'test', headerShown: false }} component={AccountScreen} />
            <AccountStack.Screen name='PersonalData' options={{ headerShown: true, title: 'Data Pribadi' }} component={PersonalData} />
            <AccountStack.Screen name='AccountTaxes' options={{ headerShown: true, title: 'Rekening & Pajak' }} component={AccountTaxes} />
            <AccountStack.Screen name='FileEmployees' options={{ headerShown: true, title: 'File Karyawan' }} component={FileEmployees} />
        </AccountStack.Navigator>
    )
}