import { StyleSheet } from 'react-native';
import color from './color';

const text= StyleSheet.create({
    title: {
        color: color.green700,
        fontFamily: 'Jua',
        fontSize: 17
    },
    subTitle: {
        color: color.grey300,
        fontFamily: 'HiMelody',
        fontSize: 14,
    },
});

export default text;