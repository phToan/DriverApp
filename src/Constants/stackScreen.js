import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NameScreen } from './nameScreen';
import Login from '../Screen/Login';
import Register from '../Screen/Register';
import { RegisterPassword } from '../Screen/Register/res_password';
import BottomTab from '../navigation/bottomTab';
import DetailOrder from '../Screen/History/detailOrder';
import OrderInfo from '../Screen/OrderInfo';
import OrderTaken from '../Screen/orderTaken';
import OrderDelivery from '../Screen/orderDelivery';
import WatchDetailScreen from '../Screen/orderDetail';

const Stack = createNativeStackNavigator();

export const StackScreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name={NameScreen.LOGIN_SCREEN} component={Login} />
            <Stack.Screen
                name={NameScreen.REGISTER_SCREEN}
                component={Register}
            />
            <Stack.Screen
                name={NameScreen.REGISTER_PASSWORD_SCREEN}
                component={RegisterPassword}
            />
            <Stack.Screen name={NameScreen.BOTTOM_TAB} component={BottomTab} />
            <Stack.Screen
                name={NameScreen.ORDER_DETAIL_SCREEN}
                component={DetailOrder}
            />
            <Stack.Screen
                name={NameScreen.ORDER_INFO_SCREEN}
                component={OrderInfo}
            />
            <Stack.Screen
                name={NameScreen.TAKE_ORDER_SCREEN}
                component={OrderTaken}
            />
            <Stack.Screen
                name={NameScreen.DELIVERY_SCREEN}
                component={OrderDelivery}
            />
            <Stack.Screen
                name={NameScreen.WATCH_DETAIL_SCREEN}
                component={WatchDetailScreen}
            />
            {/* <Stack.Screen name='history' component={HistoryScreen} />
            <Stack.Screen name='notificationDriver' component={NotificationScreen} />
            <Stack.Screen name='order' component={Order} />
            <Stack.Screen name='others' component={Others} />
            <Stack.Screen name='statistics' component={Statistics} />
            <Stack.Screen name='completedOrder' component={CompletedOrder} />
            <Stack.Screen name='canceledOrder' component={CanceledOrder} />
            
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
