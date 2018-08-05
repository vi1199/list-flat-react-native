import React from 'react';
import {
    ActivityIndicator,
} from 'react-native';
import color from '../styles/color';

const Activityloader = (props) =>  {
    return(
        <ActivityIndicator
        size= {props.size}
        animating= {true}
        color= {props.color}/>
    )
};

export default Activityloader;