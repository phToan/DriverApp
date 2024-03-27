import React, { useState, useEffect } from 'react';
import {
    View,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HeaderBottomTab from '../../Components/HeaderBottomTab';
import { GirlIcon, ManIcon } from '../../assets/images';
import { TextFont } from '../../Components/Text';
import { OptionItem } from './components/optionItem';
import { NameScreen } from '../../Constants/nameScreen';

const Others = () => {
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [id, setID] = useState('');
    const [gender, setGender] = useState(true);
    useEffect(() => {
        const getData = async () => {
            setName(await AsyncStorage.getItem('name'));
            setPhone(await AsyncStorage.getItem('phone'));
            setID(await AsyncStorage.getItem('id'));
        };
        getData();
    });
    if (gender) {
        imageSource = ManIcon;
    } else {
        imageSource = GirlIcon;
    }
    const onClickUserAccount = () => {
        navigation.navigate(NameScreen.ACCOUNT_SCREEN);
    };
    const onClickLogOut = () => {
        navigation.popToTop();
    };
    return (
        <View style={styles.container}>
            <HeaderBottomTab />
            <TouchableOpacity
                style={styles.header}
                onPress={onClickUserAccount}
            >
                <View style={styles._header_item}>
                    <Image source={imageSource} style={styles.avatar} />
                </View>
                <View style={styles.labelInfo}>
                    <TextFont fs={16} fw={'bold'} title={name} />
                    <TextFont mt={5} title={phone} fs={14} />
                </View>
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}>
                <OptionItem
                    content={'Tự động nhận đơn'}
                    colorIcon={'#08e5f4'}
                    nameIcon={'star-box-multiple'}
                    onPress={() => {}}
                    secondText={'Tắt'}
                />
                <OptionItem
                    content={'Cập nhật giấy tờ'}
                    colorIcon={'#f49c08'}
                    nameIcon={'newspaper-variant-outline'}
                    onPress={() => {}}
                />
                <OptionItem
                    content={'Trợ giúp'}
                    colorIcon={'rgb(5, 153, 15)'}
                    nameIcon={'help-circle'}
                    onPress={() => {}}
                />
                <OptionItem
                    content={'Cài đặt'}
                    colorIcon={'rgba(41, 41, 41, 0.73)'}
                    nameIcon={'cogs'}
                    onPress={() => {}}
                />

                <View style={styles.logout}>
                    <OptionItem
                        content={'Đăng xuất'}
                        colorIcon={'rgba(255, 2, 2, 0.81)'}
                        nameIcon={'logout'}
                        onPress={onClickLogOut}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default Others;

const styles = StyleSheet.create({
    container: { flex: 1 },
    labelInfo: {
        marginHorizontal: 10,
    },
    avatar: {
        width: 70,
        height: 70,
        resizeMode: 'contain',
        borderRadius: 70 / 2,
    },
    _header_item: {
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        shadowColor: 'black',
        elevation: 4,
        marginHorizontal: 5,
    },
    header: {
        backgroundColor: '#fff1d6',
        borderBottomWidth: 0.5,
        borderBottomColor: 'silver',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    logout: {
        marginTop: 20,
    },
});
