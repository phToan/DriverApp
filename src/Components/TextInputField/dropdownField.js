import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

export const DropdownField = ({
    placeholder,
    data,
    labelField,
    valueField,
    onChange
}) => (
    <View style={styles.dropdown_gender}>
        <Dropdown
            style={{ width: '100%' }}
            placeholderStyle={styles.textStyle}
            selectedTextStyle={styles.textStyle}
            data={data}
            labelField={labelField}
            valueField={valueField}
            placeholder={placeholder}
            onChange={onChange}
        />
    </View>
)

const styles = StyleSheet.create({
    dropdown_gender: {
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
    },
    textStyle: {
        fontSize: 16,
    }
})