import React, { memo } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { RocketIcon, FlashIcon } from '../../assets/images';
import { MaterialIcons } from '../../assets/icon';
import color from '../../assets/color';
import { styles } from './styles';
import { EvilIcons, MaterialCommunityIcons } from '../../assets/icon';

export const OrderItem = memo(({ item, onPress, index }) => {
    const status = item.confirmAt !== null;
    return (
        <TouchableOpacity
            style={styles.body}
            onPress={() => onPress(item)}
            key={index}
            activeOpacity={0.9}
        >
            <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
                <MaterialIcons name="my-location" size={20} color={'green'} />
                <Text style={{ marginLeft: 10, fontSize: 15 }}>
                    {item.orderData.sender_address}
                </Text>
            </View>
            <View style={styles.line} />

            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: 20,
                    marginTop: 21,
                }}
            >
                <MaterialIcons
                    name="location-on"
                    size={20}
                    color={color.darkorange}
                />
                <Text style={{ marginLeft: 10, fontSize: 15 }}>
                    {item.orderData.receiver_address}
                </Text>
            </View>

            <View style={styles.under}>
                <View style={{ flex: 1, marginLeft: 20 }}>
                    {item.orderData.infor_shipping ? (
                        <Image source={RocketIcon} style={styles.image} />
                    ) : (
                        <Image source={FlashIcon} style={styles.image} />
                    )}
                </View>
                <View style={{ flex: 5 }}>
                    <Text style={styles.t_shipping}>
                        {item.orderData.infor_shipping
                            ? 'Hỏa Tốc'
                            : 'Tiết kiệm'}
                    </Text>
                    <Text style={styles.t_money}>
                        <Text style={styles.t_initmoney}>đ</Text>{' '}
                        {item.orderData.price} -
                        <Text style={{ color: 'blue' }}>
                            - {item.orderData.distance} km
                        </Text>
                    </Text>
                </View>
            </View>
            <View style={styles.footer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialCommunityIcons
                        name={
                            status
                                ? 'truck-check-outline'
                                : 'truck-remove-outline'
                        }
                        size={25}
                        color={status ? 'green' : 'red'}
                    />

                    <Text
                        style={{
                            marginLeft: 10,
                            color: status ? 'green' : 'red',
                        }}
                    >
                        {!status
                            ? 'Đơn hàng đã bị huỷ'
                            : 'Đơn hàng đã được giao thành công'}
                    </Text>
                </View>
                <EvilIcons name="chevron-right" size={30} />
            </View>
        </TouchableOpacity>
    );
});
