import React from 'react'
import { StyleSheet, View, Text,Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomePage from '../pages/HomePage'
import home from '../assets/home.png'
import DetailBook from'../pages/DetailBook'
const Tab = createBottomTabNavigator();

function Navagiation() {
    return (
       
            <Tab.Navigator    initialRouteName={'Critic'}
            tabBarOptions={{
               activeTintColor: '#15092',
               inactiveTintColor: '#15092',
               activeBackgroundColor: '#15092',
               inactiveBackgroundColor: '#15092',
                   style: {
                            backgroundColor: '#150922',
                            border: 'none',                 
                   }
            }}>
                <Tab.Screen name='home'  component={HomePage} options ={{
               tabBarIcon:({color,size}) => {
                   return <Image source={home} style={{ backColor:'white'}}/>
               } }} />
               <Tab.Screen name='about'  component={DetailBook} options ={{
                tabBarIcon:({color,size}) => {
                    return <Image source={home} style={{ backColor:'white'}}/>
                } }} />
                <Tab.Screen name='search'  component={HomePage} options ={{
                    tabBarIcon:({color,size}) => {
                        return <Image source={home} style={{ backColor:'white'}}/>
                    } }} />
            </Tab.Navigator>
    
    );
}

export default Navagiation;

const styles = StyleSheet.create({
    navigator: {
        backgroundColor: '#150922',
    },
});
