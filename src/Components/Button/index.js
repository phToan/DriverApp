import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '../../assets/icon';

export const Button = ({
    colorTitle,
    colorBackground,
    onPress,
    title,
    icon,
}) => (
    <TouchableOpacity
        onPress={onPress}
        style={[styles.bt, { backgroundColor: colorBackground }]}
    >
        {icon && <FontAwesome name={icon} size={25} color={'white'} />}

        <Text style={[styles.textBT, { color: colorTitle }]}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    textBT: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    bt: {
        justifyContent: 'center',
        borderRadius: 5,
        paddingHorizontal: 30,
        padding: 15,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
});
