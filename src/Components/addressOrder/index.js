import React, { memo } from 'react';
import { styles } from './styles';
import { View, Text, TouchableOpacity } from 'react-native';
import { Octicons, MaterialIcons } from '../../assets/icon';

export const InfoOrder = memo(
    ({ title, iconColor, iconName, address, name, phone, onPress }) => (
        <View style={[styles.sender, { borderColor: iconColor }]}>
            <MaterialIcons
                name={iconName}
                size={25}
                color={iconColor}
                style={{ flex: 1 }}
            />
            <TouchableOpacity style={styles.infor} onPress={onPress}>
                <Text style={[styles.infor_title, { color: iconColor }]}>
                    Thông tin {title}{' '}
                </Text>
                <Text style={styles.infor_address}>{address}</Text>
                {name === '' ? (
                    <Text style={styles.infor_blank}>
                        Thêm thông tin {title}{' '}
                        <Text style={styles.star}>*</Text>
                    </Text>
                ) : (
                    <Text style={{ fontSize: 15 }}>
                        {name} <Octicons name="dot-fill" size={12} /> {phone}
                    </Text>
                )}
            </TouchableOpacity>
        </View>
    )
);
