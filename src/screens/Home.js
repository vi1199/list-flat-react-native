import React, { Component } from 'react';
import { 
    View,
    StatusBar,
    FlatList,
    Button,
    Text,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { fetchLatestMovies } from '../actions/index';
import { CustomList } from '../components/List/CustomList';
import color from '../styles/color';
import states from '../data/states';


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
        this.props.fetchLatestMovies();
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
    showLoader = () => {
        
    }
    render(){
        if (this.props.movies.sampleReducer.isFetching) {
            return (
                <View style = {{flex: 1, justifyContent: 'center', backgroundColor: color.orange500}}>
                    <ActivityIndicator 
                        size = 'small'
                        animating = {true}
                        color = {color.blue500}/>
                </View>
            )
        } else {
            return(
                <View>
                </View>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        movies : state
    }
}

export default connect(mapStateToProps, {fetchLatestMovies})(Home);