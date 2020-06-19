import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Header = () => {
    return (
        <View style = {headerContainer}>
        <Text Style = {header}> Crypto App </Text>


        </View>

    )

}

const style = StyleSheet.create({
    headerContainer : {
        display : 'flex',
        marginTop : 55,
        alignItems : 'center'},
    header : {
        fontWeight : 'bold',
        fontSize : 20
    }
})

const {headerContainer , header} = style ;

export default Header; 