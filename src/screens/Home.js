import React, { Component } from 'react';
import { 
    View,
    StatusBar,
    FlatList 
} from 'react-native';
import states from '../data/states';
import { CustomList, Separator} from '../components/List';

const TEMP_CURRENT_STATE= 'Haryana';

class Home extends Component {

    handlelistItemPress = () => {
        console.log('row pressed')
    }
    render(){
        return(
            <View style= {{flex: 1}}>
                <FlatList
                    data= {states}
                    renderItem= {({item}) => 
                        <CustomList 
                            text= {item}
                            selected= {item === TEMP_CURRENT_STATE}
                            onPress= {this.handlelistItemPress}/>}
                    keyExtractor= {(item) => item}
                    ItemSeparatorComponent= {Separator}
                />
            </View>
        )
    }
}

export default Home;