import React, {Component} from 'redux';
import {
    View
} from 'react-native';
import {connect} from 'react-redux';

class SplashScreen extends Component {
    render(){
        return (
            <View>
            </View>
        )
    }
};

const mapStateToProps = state => ({

})
export default connect (mapStateToProps)(SplashScreen);