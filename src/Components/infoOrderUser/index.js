import { FontAwesome } from '../../assets/icon';
import { View, Text, StyleSheet } from 'react-native';

export const InfoOrderUser = ({ label, name }) => (
    <>
        <Text style={styles.labelLocate}>Thông tin {label}</Text>
        <View style={styles.user}>
            <FontAwesome name="user-circle-o" color={'black'} size={45} />
            <View style={{ marginLeft: 10 }}>
                <Text style={styles.name}>{name}</Text>
                <Text>{label}</Text>
            </View>
        </View>
    </>
);

const styles = StyleSheet.create({
    user: {
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    labelLocate: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 30,
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
    },
});
