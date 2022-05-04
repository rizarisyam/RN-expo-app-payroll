
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AdditionStack = createNativeStackNavigator()

import AdditionScreen from '../screens/addition/Addition'
import LeaveScreen from '../screens/addition/Leave'
import ApplyForLeave from '../screens/addition/ApplyForLeave'
import LeaveDetails from '../screens/addition/LeaveDetails'

import Permit from '../screens/addition/permission/Permit'
import AddPermit from '../screens/addition/permission/AddPermit'

export default AccountNavigator = () => {
    return (
        <AdditionStack.Navigator screenOptions={{ headerShown: true }}>
            {/* <AdditionStack.Screen name='AdditionScreen' component={AdditionScreen} /> */}
            <AdditionStack.Screen name='LeaveScreen' options={{ headerShown: true, title: 'Cuti', headerBackButtonMenuEnabled: true }} component={LeaveScreen} />
            <AdditionStack.Screen name='ApplyForLeaveScreen' options={{ title: 'Ajukan Cuti' }} component={ApplyForLeave} />
            <AdditionStack.Screen name='LeaveDetailsScreen' options={{ title: 'Detail Cuti' }} component={LeaveDetails} />


            <AdditionStack.Screen name='PermitScreen' options={{ title: 'Izin' }} component={Permit} />
            <AdditionStack.Screen name='AddPermitScreen' options={{ title: 'Ajukan Izin' }} component={AddPermit} />
        </AdditionStack.Navigator>
    )
}