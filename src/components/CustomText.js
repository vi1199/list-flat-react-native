import React from 'react';
import {
    Text
} from 'react-native';

const CustomText = (props) => {
    return(
        <Text 
        selectable= {props.selectable} // native copy/paste functionality - Type- boolean
        ellipsizeMode= {props.ellipsizeMode} // if text grows how ui should behave eg:(..wers, as..rs, aswe..)- head / middle / tail / clip

        style= {{
            fontFamily: props.fontFamily,
            color: props.color,
            fontSize: props.fontSize,
            fontStyle: props.fontStyle,
            fontWeight: props.fontWeight,
            textAlign: props.textAlign, // Type- String - 'auto'/'left'/'center'/'justify'
            textDecorationLine: props.textDecorationLine, //Type - String - 'none'/'underline'/'line-through'/'underline line-through'
            textShadowColor: props.textShadowColor,
            textShadowRadius: props.textShadowRadius,
        }}>
            {props.children}
        </Text>
    )
};

export default CustomText;