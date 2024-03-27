import React, { useState, useEffect } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NameScreen } from '../../Constants/nameScreen';
import { FieldInfo, FieldLabel } from './components/fieldInfo';
import { Header } from '../../Components/Header';
import { styles } from './styles';

const UserAccount = () => {
    const navigation = useNavigation();
    const [nameUser, setNameUser] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phone, setPhone] = useState('');
    const [gender, setGender] = useState('');
    const [id, setID] = useState('');

    const onClickReturn = () => {
        navigation.navigate(NameScreen.BOTTOM_TAB);
    };
    const onClickChangePass = () => {
        navigation.navigate(NameScreen.EDIT_PASSWORD_SCREEN, { id: id });
    };
    const onClickChangeInforUser = () => {
        navigation.navigate(NameScreen.EDIT_PROFILE_SCREEN, { data });
    };
    const getData = async () => {
        setNameUser(await AsyncStorage.getItem('name'));
        setDateOfBirth(await AsyncStorage.getItem('dob'));
        setPhone(await AsyncStorage.getItem('phone'));
        setGender(await AsyncStorage.getItem('gender'));
        setID(await AsyncStorage.getItem('id'));
    };

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             if (isUpdate) {
    //                 await getDatabase();
    //                 await getData();
    //                 setUpdate(false);
    //             }
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchData();
    // }, [isUpdate]);

    useEffect(() => {
        getData();
    }, []);

    // const getDatabase = async () => {
    //     getToken();
    //     const accessToken = await AsyncStorage.getItem('access_token');
    //     const data = {
    //         headers: {
    //             Authorization: accessToken,
    //         },
    //     };
    //     await instance
    //         .get('/driver', data)
    //         .then(async (res) => {
    //             await AsyncStorage.setItem(
    //                 'id',
    //                 res.data.userData.id.toString()
    //             );
    //             await AsyncStorage.setItem('name', res.data.userData.name);
    //             await AsyncStorage.setItem('dob', res.data.userData.dob);
    //             await AsyncStorage.setItem(
    //                 'gender',
    //                 JSON.stringify(res.data.userData.gender)
    //             );
    //             await AsyncStorage.setItem('phone', res.data.userData.phone);
    //             await AsyncStorage.setItem(
    //                 'vehicle_num',
    //                 res.data.userData.vehicle_num
    //             );
    //         })
    //         .catch((err) => {
    //             console.log(err + 'vl');
    //         });
    // };
    // const getToken = async () => {
    //     const refreshToken = await AsyncStorage.getItem('refresh_token');
    //     const data = {
    //         refresh_token: refreshToken,
    //     };
    //     await instance
    //         .post('/driver/refresh_token', data)
    //         .then(async (res) => {
    //             if (res.data.err == 0) {
    //                 await AsyncStorage.setItem(
    //                     'access_token',
    //                     res.data.access_token
    //                 );
    //                 // console.log(await AsyncStorage.getItem('access_token'))
    //             } else if (res.data.err == 2) {
    //                 setErrorMessage(
    //                     'Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại'
    //                 );
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };
    const data = {
        name: nameUser,
        dob: dateOfBirth,
        phone: phone,
        gender: gender,
        id: id,
    };

    return (
        <SafeAreaView>
            <Header onClickReturn={onClickReturn} title="Tài khoản của tôi" />
            <View style={styles.body}>
                <FieldLabel
                    labelStyle={styles.textItem}
                    onPress={onClickChangeInforUser}
                    label={'Thông tin cá nhân'}
                />
                <FieldInfo info={nameUser} label={'Họ và tên'} />
                <FieldInfo info={dateOfBirth} label={'Ngày sinh'} />
                <FieldInfo info={phone} label={'Số điện thoại'} />
                <FieldLabel
                    labelStyle={styles.textItem}
                    onPress={onClickChangePass}
                    label={'Password'}
                />
            </View>
        </SafeAreaView>
    );
};

export default UserAccount;
