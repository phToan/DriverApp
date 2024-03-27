import React from 'react';
import { FontAwesome } from '../../../assets/icon';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextFont } from '../../../Components/Text';

const styles = StyleSheet.create({
    layoutItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomWidth: 0.2,
        borderColor: 'silver',
        alignItems: 'center',
    },
    textItem: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
    },
});

export const FieldInfo = ({ info, label }) => (
    <View style={styles.layoutItem}>
        <Text style={styles.textItem}>{label}</Text>
        <TextFont title={info} fs={16} />
    </View>
);

export const FieldLabel = ({ labelStyle, onPress, label }) => (
    <View style={styles.layoutItem}>
        <Text style={labelStyle}>{label}</Text>
        <TouchableOpacity onPress={onPress} style={{ padding: 3 }}>
            <FontAwesome name="pencil" color={'darkorange'} size={25} />
        </TouchableOpacity>
    </View>
);
