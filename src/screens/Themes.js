import React, { Component } from 'react';
import { ScrollView, FlatList, View, TouchableHighlight, Text } from 'react-native';
import { ThemeList, Separator } from '../components/List/CustomList';
import themeColor from '../data/themeColor';


class Themes extends Component {
    handleListItem = () => {

    }
    textOnPress = () => {
        console.log('pressed')
        let str= '(3x2)dfrtrreew';
        this.callFunction(str)
    }



    render(){
        return (
            <View>
                <FlatList
                    data= {themeColor}
                    renderItem= {({item}) => 
                        <ThemeList
                            text= {item}
                            onPress= {this.handleListItem}/>}
                    keyExtractor= {(item) => item}
                />
                <View>
                    <TouchableHighlight onPress= {this.evaluateExp}>
                        <Text>Supp</Text>
                    </TouchableHighlight>
                </View>
           </View>
        )
    }
}

export default Themes;
