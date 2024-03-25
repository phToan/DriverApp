import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '../../../assets/icon';

export const ItemNotice = ({ onPress, icon, label, color }) => (
    <TouchableOpacity onPress={onPress} style={styles.item}>
        <View style={styles._item_icon}>
            <Ionicons name={icon} color={color} size={24} />
        </View>
        <View>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.title}>dateTime</Text>
        </View>
    </TouchableOpacity>
);
const styles = StyleSheet.create({
    _item_icon: {
        borderRadius: 100,
        backgroundColor: '#FEEBD0',
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginHorizontal: 15,
        justifyContent: 'center',
    },
    item: {
        paddingVertical: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: 5,
    },
    label: {
        fontWeight: '500',
        fontSize: 16,
    },
    title: {
        marginTop: 5,
    },
});
