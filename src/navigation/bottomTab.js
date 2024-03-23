import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notification from '../Screen/Notification';
import History from '../Screen/History';
import Statistic from '../Screen/Statistic';
import User from '../Screen/User';
import Home from '../Screen/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: 'orange',
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 14,
                    marginTop: 5,
                },
                tabBarIconStyle: {
                    marginTop: 5,
                },
            }}
        >
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="text-box-check" color={color} size={25} />
                    ),
                }}
                name="Đơn hàng"
                component={Home}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="clock-time-ten" color={color} size={25} />
                    ),
                }}
                name="Lịch sử"
                component={History}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon2 name="notifications" color={color} size={25} />
                    ),
                }}
                name="Thông báo"
                component={Notification}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon2 name="stats-chart" color={color} size={25} />
                    ),
                }}
                name="Thống kê"
                component={Statistic}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="dots-grid" color={color} size={25} />
                    ),
                }}
                name="Thêm"
                component={User}
            />
        </Tab.Navigator>
    );
};

export default BottomTab;
