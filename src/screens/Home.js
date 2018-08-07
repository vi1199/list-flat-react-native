import React, { Component } from 'react';
import { 
    StatusBar,
    FlatList,
    Button,
    TouchableOpacity,
    Alert,
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { fetchLatestMovies } from '../actions/index';
import { CustomList } from '../components/List/CustomList';
import color from '../styles/color';
import CustomView from '../components/CustomView';
import Activityloader from '../components/ActivityLoader';
import CustomText from '../components/CustomText';

class Home extends Component {
    static navigationOptions = ({ navigation }) => {
        const params= navigation.state.params || {};
        return {
            title: 'Your Daily Entertainment',
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
    constructor() {
        super();
        this.state= {
            movies: []
        }
    }
    componentDidMount() {
        this.props.navigation.setParams({headerIconPress: this.handleSettingsIconPress})
        this.props.dispatch(fetchLatestMovies());

    }
    handleSettingsIconPress = () =>{
        console.log('icon pressed');
        this.props.navigation.navigate('Themes');
    }
    render(){
        if (this.props.movies.sampleReducer.isFetching) {
            return(
                <CustomView flex= {1} justifyContent= {'center'} alignItems= {'center'}>
                    <Activityloader
                        size= {'small'}
                        color= {color.blue500}/>
                    <CustomText fontSize= {15} color= {color.blue500}>Loading...</CustomText>
                </CustomView>
            )
        }else {
          
            return(
                <CustomView backgroundColor= {color.lightgreen500} flex= {1}>
                    {
                        this.props.movies.sampleReducer.data.data ? 
                        this.props.movies.sampleReducer.data.data.results.map((item, idx) => {
                            return(
                                <CustomView key= {idx} 
                                    padding= {3}
                                    backgroundColor= {color.white}
                                    elevation= {3}
                                    borderRadius= {4}
                                    marginHorizontal= {7}
                                    marginVertical= {5}>
                                    <CustomText
                                        >{item.title}</CustomText>
                                </CustomView>
                            )
                        })
                        : 
                        []
                    }
                </CustomView>
            )
        }
    }
}

const mapStateToProps = state => ({
        movies : state
})


export default connect(mapStateToProps)(Home);