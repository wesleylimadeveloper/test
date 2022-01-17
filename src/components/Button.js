import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default ({ onPress, title }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.textButton}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 30,
        justifyContent: 'center',
        paddingVertical: 15,
        width: '70%'
    },
    textButton: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
})