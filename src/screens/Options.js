import React, { Component } from 'react';
import {
    View,
    StatusBar,
    ScrollView
} from 'react-native';
import EvilIcons from 'react-native-vector-icons';
import { CustomList , Separator } from '../components/List';

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listItemThemes: 'Themes',
            listItemSettings: 'About Us'
        }
    }
    handleThemePress = () => {

    }
    handleSettingsPress = () => {

    }
    render(){
        return(
            <ScrollView>
                <CustomList
                    text= {this.state.listItemThemes}
                    onPress= {this.handleThemePress}
                />
                <Separator/>
                <CustomList
                    text= {this.state.listItemSettings}
                    onPress= {this.handleSettingsPress}
                />
                <Separator/>
            </ScrollView>
        )
    }
}

export default Options;