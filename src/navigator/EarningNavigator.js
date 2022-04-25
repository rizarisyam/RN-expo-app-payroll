
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const EarningStack = createNativeStackNavigator()

import SalaryScreen from '../screens/earning/Salary'
import IncomeScreen from '../screens/earning/Income'
import PayrollDecutionsScreen from '../screens/earning/PayrollDeductions'

export default AccountNavigator = () => {
    return (
        <EarningStack.Navigator initialRouteName='AccountScreen'>
            <EarningStack.Screen name='SalaryScreen' options={{ title: 'Gaji Karyawan', headerShown: false }} component={SalaryScreen} />
            <EarningStack.Screen name='IncomeScreen' options={{ title: 'Pendapatan', headerShown: true, headerStyle: { backgroundColor: '#4684EB' }, headerTintColor: 'white' }} component={IncomeScreen} />
            <EarningStack.Screen name='PayrollDeductions' options={{ title: 'Pemotongan Gaji', headerShown: true, headerStyle: { backgroundColor: '#4684EB' }, headerTintColor: 'white' }} component={PayrollDecutionsScreen} />
        </EarningStack.Navigator>
    )
}