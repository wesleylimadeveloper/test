import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default () => <Image style={styles.logo} source={require('../assets/computers.png')} />

const styles = StyleSheet.create({
    logo: {
        height: 243,
        width: 350
    }
})