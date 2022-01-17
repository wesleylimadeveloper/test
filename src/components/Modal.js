import React from 'react'
import {
    Modal,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native'

export default ({ modalColor, modalMessage, onPress, visible }) => (
    <Modal
        animationType='fade'
        transparent={true}
        visible={visible}
    >
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <View style={[styles.modal, { backgroundColor: modalColor }]}>
                    <Text style={styles.modalText}>{modalMessage}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </Modal>
)

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    modal: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },
    modalText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
})