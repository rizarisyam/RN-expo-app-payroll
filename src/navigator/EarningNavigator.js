
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const EarningStack = createNativeStackNavigator()

import SalaryScreen from '../screens/earning/Salary'

export default AccountNavigator = () => {
    return (
        <EarningStack.Navigator initialRouteName='AccountScreen'>
            <EarningStack.Screen name='SalaryScreen' options={{ title: 'Gaji Karyawan', headerShown: false }} component={SalaryScreen} />
        </EarningStack.Navigator>
    )
}