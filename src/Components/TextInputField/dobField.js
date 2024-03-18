import React from "react"
import { StyleSheet } from "react-native"
import { View, Text, TouchableOpacity } from "react-native"
import { AntDesign } from "../../assets/icon"

const styles = StyleSheet.create({
    body: {
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        height: 55,
        marginTop: 20
    },
    label: {
        fontSize: 14,
        backgroundColor: 'white',
        paddingHorizontal: 3
    },
    tranform: {
        transform: [{ translateX: 10 }, { translateY: -15 }]
    },
    title: {
        fontSize: 16,
        marginVertical: 3,
        bottom: 7
    }
})

export const DobField = ({
    dob,
    onClickCalendar
}) => (
    <View style={styles.body}>
        <View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.label, styles.tranform]}>Ngày Sinh</Text>
            </View>
            <Text style={styles.title}>{dob}</Text>
        </View>
        <TouchableOpacity onPress={onClickCalendar}>
            <AntDesign name='calendar' size={30} color={'darkorange'} />
        </TouchableOpacity>
    </View>
)