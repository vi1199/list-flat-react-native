import React from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import styles from './styles';

const CustomList = ({text, selected, onPress}) => (
    <TouchableHighlight onPress= {onPress}>
        <View style= {styles.row}>
            <Text style= {styles.text}>{text}</Text>
            {
                selected? <Text> @ </Text>: null
            }
        </View>
    </TouchableHighlight>
);

export default CustomList;