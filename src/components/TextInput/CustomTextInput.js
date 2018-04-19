import React, {Component} from 'react';
import {
    AppRegistry,
    TextInput,
    View
} from 'react-native';

export default class CustomTextInput extends Component{
    constructor(props){
        super(props);
        this.state= {
            
        }
    }
    static defaultProps= {

    }
    render(){
        return(
            <View>
                <TextInput
                    placeholder= 'Some placeholder'/>
            </View>
        )
    }
}