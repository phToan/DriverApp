import React, { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons, Entypo } from '../../assets/icon';
import { renderTime } from '../../Helper/rederTime';

export const OrderTransport = memo(({ infoShipping, timer, title }) => (
    <View style={styles.body}>
        <View style={styles.labelTransport}>
            <MaterialCommunityIcons
                name="truck-fast-outline"
                size={25}
                color={'orange'}
            />
            <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>
                Thông tin vận chuyển
            </Text>
        </View>
        <View style={{ marginTop: 5 }}>
            {infoShipping ? (
                <Text>Giao hàng hỏa tốc</Text>
            ) : (
                <Text>Giao hàng tiết kiệm</Text>
            )}
            <View style={styles.order_time}>
                <Entypo name="dot-single" size={30} color={'#0fc478'} />
                <Text style={{ color: '#0fc478' }}>{title}</Text>
            </View>
            <View style={styles.timer}>
                <Text style={{ marginLeft: 10 }}>{renderTime(timer)}</Text>
            </View>
        </View>
    </View>
));

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'white',
        padding: 10,
        borderColor: 'silver',
        borderWidth: 0.5,
        borderColor: 'orange',
        borderRadius: 5,
    },
    labelTransport: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    order_time: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    timer: {
        borderLeftWidth: 0.5,
        borderColor: 'silver',
        marginLeft: 14,
        paddingLeft: 6,
    },
});
