import React, { useState } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Alert,
} from 'react-native';
import HeaderBottomTab from '../../Components/HeaderBottomTab';
import Icon1 from 'react-native-vector-icons/Ionicons';
import { ItemNotice } from './components/itemNotice';
import { ItemSeparator } from './components/itemSeparator';
import { ItemStatusOrder } from './components/itemStatusOrder';

const dataPromotion = [
    { id: 1, label: 'Ưu đãi đến 20.000đ', content: '' },
    { id: 2, label: 'Voucher lên đến 20k', content: '' },
    { id: 3, label: 'Ưu đãi dành cho bạn', content: '' },
    { id: 4, label: 'Freeship tất cả các đơn', content: '' },
];

const dataNotice = [
    { id: 1, status: 1 },
    { id: 2, status: 2 },
    { id: 3, status: 2 },
    { id: 4, status: 2 },
];
const dataStatusOrder = [
    { id: 1, status: 1, label: '', content: '' },
    { id: 2, status: 2, label: 'Freeship tất cả các đơn', content: '' },
    { id: 3, status: 3, label: 'Freeship tất cả các đơn', content: '' },
    { id: 4, status: 4, label: 'Freeship tất cả các đơn', content: '' },
];

const NotificationScreen = () => {
    const [listItems, setListItems] = useState(dataStatusOrder);
    const getItem = (item) => {
        alert('ID: ' + item.id + ' value:  ' + item.value);
    };
    return (
        <SafeAreaView style={styles.container}>
            <HeaderBottomTab />
            <View style={styles.header}>
                <ItemNotice
                    onPress={() => {}}
                    icon="pricetags-sharp"
                    label={'Khuyến mãi'}
                    color={'green'}
                />
                <ItemNotice
                    onPress={() => {}}
                    icon="notifications"
                    label={'Thông báo'}
                    color={'orange'}
                />
            </View>

            <Text style={styles.update}>Cập nhật đơn hàng</Text>
            <View style={{ backgroundColor: 'white', marginTop: 'white' }}>
                <FlatList
                    data={listItems}
                    renderItem={({ item }) => (
                        <ItemStatusOrder item={item} onPress={getItem} />
                    )}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <ItemSeparator />}
                />
            </View>
        </SafeAreaView>
    );
};

export default NotificationScreen;

const styles = StyleSheet.create({
    update: {
        margin: 10,
        fontSize: 16,
        fontWeight: '600',
    },
    container: {
        flex: 1,
    },
    header: {
        marginTop: 10,
    },
});
