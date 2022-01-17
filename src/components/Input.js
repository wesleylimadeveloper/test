import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default ({ onChangeText, placeholder, secureTextEntry, value }) => (
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry || false}
        value={value}
    />
)

const styles = StyleSheet.create({
    input: {
        alignItems: 'center',
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1,
        color: '#000',
        fontSize: 16,
        height: 48,
        justifyContent: 'center',
        marginBottom: 5,
        paddingLeft: 10,
        paddingVertical: 10,
        width: '100%'
    }
})