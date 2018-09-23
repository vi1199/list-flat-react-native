import React, { Component } from 'react';
import { 
    StatusBar,
    FlatList,
    Button,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
    Image,
    Alert,
    View,
    Text,
    AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { fetchLatestMovies, fetchUpComingMovies } from '../actions/index';
import color from '../styles/color';
import CustomView from '../components/CustomView';
import Activityloader from '../components/ActivityLoader';
import CustomText from '../components/CustomText';
import { BASE_API, POPULAR, API_KEY, BASE_IMAGE_API } from '../utils/constants';
import { backdrop_sizes, poster_sizes, logo_sizes } from '../styles/images';

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
            
        }
    }
    componentDidMount() {
        this.props.navigation.setParams({headerIconPress: this.handleSettingsIconPress})
        this.props.dispatch(fetchLatestMovies());
        this.props.dispatch(fetchUpComingMovies());
    }
    handleSettingsIconPress = () =>{
        console.log('icon pressed');
        this.props.navigation.navigate('Themes');
    }
    getItem = (item) => {
        console.log('values are', item);
        this.storeMovie(item.original_title)
    }
    storeMovie = async (item) => {
        try {
          await AsyncStorage.setItem('movie', item);
          console.log('saved');
        } catch (error) {
          // Error saving data
          console.log('error');
        }
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
          console.log('path is---->>>', `${BASE_API}/${POPULAR}?api_key=${API_KEY}`)
            return(
                <CustomView
                    backgroundColor= {color.red500}
                    padding= {10}>
                    <CustomView 
                        backgroundColor= {color.amber500} 
                        padding= {5}>
                        <CustomText>Popular</CustomText>
                        <ScrollView
                            backgroundColor = {color.blue300}
                            horizontal
                            showsHorizontalScrollIndicator= {false}>
                            {
                                this.props.movies.sampleReducer.data.data ? 
                                this.props.movies.sampleReducer.data.data.results.map((item, idx) => {
                                    return(
                                        <TouchableOpacity 
                                            key= {idx} 
                                            onPress = {()=> this.getItem(item)}>
                                            <CustomView 
                                                flexDirection= {'column'}
                                                backgroundColor= {'transparent'}
                                                elevation= {3}
                                                borderRadius= {7}
                                                marginHorizontal= {7}
                                                marginVertical= {5}>
                                                <Image
                                                    style= {{ height: 220, width: 150, backgroundColor: 'transparent', borderRadius: 7,}}
                                                    resizeMode= 'contain'
                                                    source= {{uri: `${BASE_IMAGE_API}/${poster_sizes.w342}/${item.poster_path}`}} />
                                            </CustomView>
                                        </TouchableOpacity>
                                    )
                                })
                                : 
                                []
                            }
                        </ScrollView>
                    </CustomView>
                </CustomView>
            )
        }
    }
}

const mapStateToProps = state => ({
        movies : state
})


export default connect(mapStateToProps)(Home);