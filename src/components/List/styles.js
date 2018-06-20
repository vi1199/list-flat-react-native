import { StyleSheet } from 'react-native';
import color from '../../styles/color';
import text from '../../styles/text';

const styles= StyleSheet.create({
    row: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: color.grey100,
    },
    text: {
        fontSize: 16,
        color: color.grey700
    },
    separator:{
        marginLeft: 20,
        backgroundColor: color.grey500,
        flex: 1,
        height: 1
    }
});

export default styles;