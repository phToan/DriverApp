import React, { useState, useEffect } from 'react';
import {
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Ionicons';
import {
    Ionicons,
    AntDesign,
    MaterialCommunityIcons,
    Entypo,
} from '../../assets/icon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderBottomTab from '../../Components/HeaderBottomTab';
import { GirlIcon, ManIcon } from '../../assets/images';

const Others = () => {
    const navigation = useNavigation();
    const [status, setStatus] = useState('Tắt');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [id, setID] = useState('');
    const [icon, setIcon] = useState(true); //nam: true , nu: false
    useEffect(() => {
        const getData = async () => {
            setName(await AsyncStorage.getItem('name'));
            setPhone(await AsyncStorage.getItem('phone'));
            setID(await AsyncStorage.getItem('id'));
        };
        getData();
    });
    if (icon) {
        imageSource = ManIcon;
    } else {
        imageSource = GirlIcon;
    }
    const onClickUserAccount = () => {
        navigation.navigate('userAccount');
    };
    const onClickLogOut = () => {
        navigation.popToTop();
    };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderBottomTab />
            <TouchableOpacity
                style={styles.header}
                onPress={onClickUserAccount}
            >
                <View style={styles._header_item}>
                    <Image source={imageSource} style={styles.avatar} />
                </View>
                <View
                    style={{
                        marginHorizontal: 10,
                        flex: 10,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 16,
                        }}
                    >
                        {name}
                    </Text>
                    <Text>{phone}</Text>
                    {/* <Text>{id}</Text> */}
                </View>
            </TouchableOpacity>

            <View
                style={{
                    marginTop: 10,
                    backgroundColor: 'white',
                }}
            >
                <TouchableOpacity>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            margin: 10,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <MaterialCommunityIcons
                                name="star-box-multiple"
                                color={'#08e5f4'}
                                size={30}
                            />
                            <Text style={{ marginHorizontal: 10 }}>
                                Tự động nhận đơn
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Text>{status}</Text>
                            <Entypo name="chevron-small-right" />
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomWidth: 0.5,
                            borderColor: 'silver',
                            marginLeft: 50,
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            margin: 10,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <AntDesign
                                name="profile"
                                color={'#f49c08'}
                                size={30}
                            />
                            <Text style={{ marginHorizontal: 10 }}>
                                Cập nhật giấy tờ
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Entypo name="chevron-small-right" />
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomWidth: 0.5,
                            borderColor: 'silver',
                            marginLeft: 50,
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            margin: 10,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Entypo
                                name="help-with-circle"
                                color={'#f1c906'}
                                size={30}
                            />
                            <Text style={{ marginHorizontal: 10 }}>
                                Trợ giúp
                            </Text>
                        </View>
                        <Entypo name="chevron-small-right" />
                    </View>
                    <View
                        style={{
                            borderBottomWidth: 0.5,
                            borderColor: 'silver',
                            marginLeft: 50,
                        }}
                    />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    marginTop: 20,
                    backgroundColor: 'white',
                }}
            >
                <TouchableOpacity onPress={onClickLogOut}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            margin: 10,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Ionicons
                                name="log-out"
                                color={'#f1c906'}
                                size={30}
                            />
                            <Text
                                style={{ marginHorizontal: 10, color: 'red' }}
                            >
                                Đăng xuất
                            </Text>
                        </View>
                        <Entypo name="chevron-small-right" />
                    </View>
                    <View
                        style={{
                            borderBottomWidth: 0.5,
                            borderColor: 'silver',
                            marginLeft: 50,
                        }}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Others;

const styles = StyleSheet.create({
    avatar: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
    },
    _header_item: {
        borderRadius: 100,
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        paddingHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        height: 80,
        backgroundColor: '#fff1d6',
        borderBottomWidth: 0.5,
        borderBottomColor: 'silver',
        justifyContent: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
