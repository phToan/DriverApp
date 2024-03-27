import Icon from 'react-native-vector-icons/Entypo';
import AppContext from '../../Context';
import React, { memo, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HeaderBottomTab = memo(() => {
    const { lightDot, toggleLightDot } = useContext(AppContext);
    return (
        <View
            style={{
                height: 100,
                backgroundColor: lightDot ? '#fff1d6' : '#c2bdbd',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
            }}
        >
            <TouchableOpacity
                style={{
                    backgroundColor: lightDot ? '#f47c2a' : '#4d4d85',
                    flexDirection: 'row',
                    borderRadius: 20,
                    alignItems: 'center',
                    width: '40%',
                    margin: 10,
                }}
                onPress={toggleLightDot}
            >
                <Icon
                    name="dot-single"
                    color={lightDot ? 'green' : 'red'}
                    size={40}
                />
                <Text
                    style={{
                        color: 'white',
                        fontWeight: 'bold',
                    }}
                >
                    {' '}
                    {lightDot ? 'Trực tuyến' : 'Ngoại tuyến'}
                </Text>
                <Icon name="chevron-small-right" color={'white'} size={25} />
            </TouchableOpacity>
        </View>
    );
});

export default HeaderBottomTab;
