import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const CustomText = (props) => {
    return (
        <View style= {styles.container}>
            <Text 
                ellipsizeMode = {props.ellipsizeMode}
                selectable = {props.selectable}
                style = {[styles.text_style]}>
                {props.text}
            </Text>
        </View>
    );
}

export default CustomText;