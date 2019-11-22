import React from 'react';
import PropTypes from 'prop-types';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';

import { Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../styles/colors';
import EmptyContainer from '../containers/EmptyContainer';
import EmptyContainer2 from '../containers/EmptyContainer2';
import DrawerNavigatorExample from '../containers/dummy/NavigationDrawerStructure';


const CustomTabBarIcon = (name, size) => {
    const icon = ({ tintColor }) => (
      <Icon
        name={name}
        size={size}
        color={tintColor}
      />
    );
  
    icon.propTypes = {
      tintColor: PropTypes.string.isRequired,
    };
  
    return icon;
  };

  const DrawerNavigator = createDrawerNavigator(
    {
      //Drawer Optons and indexing
      NavScreen1: {
        screen: EmptyContainer,
        navigationOptions: {
          drawerLabel: 'Scan ID',
        },
      },
      NavScreen2: {
        screen: EmptyContainer2,
        navigationOptions: {
          drawerLabel: 'Digital Application',
        },
      },
      NavScreen3: {
        screen: EmptyContainer,
        navigationOptions: {
          drawerLabel: 'Credit Inquiry',
        },
      },
      NavScreen4: {
        screen: EmptyContainer,
        navigationOptions: {
          drawerLabel: 'Pre-qualification',
        },
      },
      NavScreen5: {
        screen: EmptyContainer,
        navigationOptions: {
          drawerLabel: 'Compliance Solutions',
        },
      },
      NavScreen6: {
        screen: EmptyContainer,
        navigationOptions: {
          drawerLabel: 'Synthetic Fraud',
        },
      },
      NavScreen7: {
        screen: EmptyContainer,
        navigationOptions: {
          drawerLabel: 'Transactions',
        },
      },
      NavScreen8: {
        screen: EmptyContainer,
        navigationOptions: {
          drawerLabel: 'Manage Alerts',
        },
      },
      NavScreen9: {
        screen: EmptyContainer,
        navigationOptions: {
          drawerLabel: 'Account Settings',
        },
      },
      NavScreen10: {
        screen: EmptyContainer,
        navigationOptions: {
          drawerLabel: 'Push Data to DT/TR1',
        },
      },
      NavScreen11: {
        screen: EmptyContainer,
        navigationOptions: {
          drawerLabel: 'DMS Sync',
        },
      },
    },
    {
      drawerWidth: Dimensions.get('window').width - 130,
    }
  );
  
  const HomeNavigationDrawer = createBottomTabNavigator({
    Explore: {
      screen: DrawerNavigator,
      navigationOptions: {
        tabBarLabel: '',
        tabBarIcon: CustomTabBarIcon('ios-home', 22),
      },
    },
    Saved: {
      screen: EmptyContainer2,
      navigationOptions: {
        tabBarIcon: CustomTabBarIcon('ios-alarm', 22),
      },
    },
    Trips: {
      screen: EmptyContainer2,
      navigationOptions: {
        tabBarIcon: CustomTabBarIcon('ios-mail', 22),
      },
    },
    Inbox: {
      screen: EmptyContainer2,
      navigationOptions: {
        tabBarIcon: CustomTabBarIcon('ios-settings', 25),
      },
    }
  }, {
    tabBarOptions: {
        showLabel: false,
        activeTintColor: colors.blue,
    },
    tabBarPosition: 'bottom'
  });
  
  export default HomeNavigationDrawer;