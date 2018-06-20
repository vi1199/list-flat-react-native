import { StackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Options from '../screens/Options';
import Themes from '../screens/Themes';

export const Root = StackNavigator(
    {
        Home: { screen: Home },
        Themes: { screen: Themes }
    },
    {
        initialRouteName: 'Home'
    }
);