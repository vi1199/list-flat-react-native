import React, { Component } from 'react';
import { 
    View,
    StatusBar,
    FlatList,
    Button,
    TouchableOpacity,
    Alert
} from 'react-native';
import states from '../data/states';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { CustomList } from '../components/List/CustomList';
import color from '../styles/color';

const TEMP_CURRENT_STATE= 'Haryana';

class Home extends Component {
    static navigationOptions = ({ navigation }) => {
        const params= navigation.state.params || {};
        return {
            title: 'Pick One',
            headerTintColor: color.grey700,
            headerTitleStyle: {
                fontWeight: '300',
                fontFamily: 'Jua'
            },
            headerRight: (
                <TouchableOpacity onPress= {params.headerIconPress}>
                    <Icon
                        name= 'settings'
                        size= {22}
                        color= {color.blue500}
                        style= {{padding: 10}}
                    />
                </TouchableOpacity>
            )
        }
    }
    componentDidMount() {
        this.props.navigation.setParams({headerIconPress: this.handleSettingsIconPress})
    }
    
    handleSettingsIconPress = () =>{
        console.log('icon pressed');
        this.props.navigation.navigate('Themes');
    }
    handlelistItemPress = () => {
        console.log('row pressed')
    }
    renderListItem = ({item}) => (
        <CustomList 
            text= {item}
            selected= {item === TEMP_CURRENT_STATE}
            onPress= {this.handlelistItemPress}
        />
    )
    render(){
        return(
            <View style= {{flex: 1}}>
                <FlatList
                    data= {states}
                    renderItem= {this.renderListItem}
                    keyExtractor= {(item) => item}
                />
            </View>
        )
    }
}

export default Home;