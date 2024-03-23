import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NameScreen } from './nameScreen';
import Login from '../Screen/Login';
import Register from '../Screen/Register';
import { RegisterPassword } from '../Screen/Register/res_password';
import BottomTab from '../navigation/bottomTab';

const Stack = createNativeStackNavigator();

export const StackScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            {/* <Stack.Screen name={NameScreen.LOGIN_SCREEN} component={Login} />
            <Stack.Screen name={NameScreen.REGISTER_SCREEN} component={Register} />
            <Stack.Screen name={NameScreen.REGISTER_PASSWORD_SCREEN} component={RegisterPassword} /> */}
            {/* <Stack.Screen name='home' component={Home} /> */}
            <Stack.Screen name={NameScreen.BOTTOM_TAB} component={BottomTab} />
            {/* <Stack.Screen name='history' component={HistoryScreen} />
            <Stack.Screen name='notificationDriver' component={NotificationScreen} />
            <Stack.Screen name='order' component={Order} />
            <Stack.Screen name='others' component={Others} />
            <Stack.Screen name='statistics' component={Statistics} />
            <Stack.Screen name='completedOrder' component={CompletedOrder} />
            <Stack.Screen name='canceledOrder' component={CanceledOrder} />
            <Stack.Screen name='detaiOrder' component={DetailOrder} />
            <Stack.Screen name='takeorder' component={TakeOrder} />
            <Stack.Screen name='details' component={Detail} />
            <Stack.Screen name='userAccount' component={UserAccount} />
            <Stack.Screen name='delivery' component={Delivery} />
            <Stack.Screen name='detail_order' component={Detail_order} />
            <Stack.Screen name='editpassword' component={EditPassword} />
            <Stack.Screen name='editprofile' component={EditProfile} /> */}
        </Stack.Navigator>
    );
};
