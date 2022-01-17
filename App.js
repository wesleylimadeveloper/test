import React, { useState } from 'react'
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'
import Logo from './src/components/Logo'
import Input from './src/components/Input'
import Button from './src/components/Button'
import Modal from './src/components/Modal'

import axios from 'axios'

export default () => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [modalColor, setModalColor] = useState('red')
  const [modalMessage, setModalMessage] = useState('')

  const user = {
    "email": email,
    "senha": senha
  }

  const isEmailValid = (email) => {
    const rgx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return rgx.test(String(email).toLowerCase())
  }

  const acessar = async () => {

    if (email.trim() !== '' && senha.trim() !== '') {

      if (isEmailValid(email.trim())) {

        try {
          const response = await axios.post("https://processoreact.projetos.jrmendonca.com.br/Usuario/ValidaUsuario", user)
          const data = await response.data

          const message = data.mensagem

          if (data.id === 101) {
            setIsVisible(true)
            setModalMessage(message)
          }

          if (data.id === 100) {
            setIsVisible(true)
            setModalColor('green')
            setModalMessage(message)
          }

        } catch (error) {
          Alert(error)
        }

      } else {
        Alert.alert("Email inválido", "Digite um e-mail válido.")
      }

    } else {
      Alert.alert("Preencha todos os dados", "Digite email e senha.")
    }

  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#000' barStyle='default' />
      <Modal
        onPress={() => setIsVisible(false)}
        modalColor={modalColor}
        modalMessage={modalMessage}
        transparent={true}
        visible={isVisible}
      />
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <Text style={styles.title}>BEM VINDO</Text>
      <View style={styles.InputsContainer}>
        <Input
          onChangeText={email => setEmail(email)}
          placeholder="Email"
          value={email}
        />
        <Input
          onChangeText={senha => setSenha(senha)}
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
        />
        <TouchableOpacity>
          <Text style={styles.text}>Recuperar senha</Text>
        </TouchableOpacity>
      </View>
      <Button onPress={acessar} title="ACESSAR" />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Não tem conta?</Text>
        <TouchableOpacity>
          <Text style={[styles.footerText, styles.redText]}>Crie uma nova agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center'
  },
  logoContainer: {
    marginBottom: 20
  },
  title: {
    fontSize: 38,
    marginBottom: 20
  },
  InputsContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
    width: '70%'
  },
  text: {
    color: 'gray',
    fontSize: 18,
    paddingRight: 5
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80
  },
  footerText: {
    color: 'gray',
    fontSize: 16
  },
  redText: {
    color: 'red'
  }
});
