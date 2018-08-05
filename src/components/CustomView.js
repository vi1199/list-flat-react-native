import React, {Component} from 'react';
import {
    View,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

class CustomView extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style= {{
                flex: this.props.flex,
                width: this.props.width,
                height: this.props.height,

                justifyContent: this.props.justifyContent,
                alignItems: this.props.alignItems,
                alignSelf: this.props.alignSelf,
                backgroundColor: this.props.backgroundColor,
                opacity: this.props.opacity,
                elevation: this.props.elevation,
            
                borderRadius: this.props.borderRadius,
                borderColor: this.props.borderColor,
                borderWidth: this.props.borderWidth,
                borderStyle: this.props.borderStyle,

                padding: this.props.padding,
                paddingHorizontal: this.props.paddingHorizontal,
                paddingVertical: this.props.paddingVertical,

                margin: this.props.margin,
                marginHorizontal: this.props.marginHorizontal,
                marginVertical: this.props.marginVertical
            }}>
            {this.props.children}
            </View>
        )
    }
};

export default CustomView;

