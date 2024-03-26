import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons, Entypo } from '../../../assets/icon';
import { TextFont } from '../../../Components/Text';

export const OptionItem = ({
    content,
    nameIcon,
    colorIcon,
    secondText,
    onPress,
}) => (
    <TouchableOpacity style={styles.body} onPress={onPress} activeOpacity={0.9}>
        <View style={styles.iconView}>
            <MaterialCommunityIcons
                name={nameIcon}
                color={colorIcon}
                size={35}
            />
            <TextFont title={content} mh={10} fs={16} fw={'500'} />
        </View>
        <View style={styles.iconView}>
            <TextFont title={secondText} mr={10} fs={16} />
            <Entypo name="chevron-small-right" size={25} />
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    body: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        backgroundColor: 'white',
        padding: 15,
    },
    iconView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
