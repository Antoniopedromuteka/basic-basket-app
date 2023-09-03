import React from 'react'
import { TextName } from '../../../components/Text'
import { Image, StyleSheet, View } from 'react-native'

export const Items = ({ titulo, lista}) => {
  return (
    <>
      <TextName style={styles.title}>{titulo}</TextName>
      {lista.map(({ nome, imagem, index}) => (
        <View key={nome} style={styles.container}>
          <Image style={styles.image} source={imagem} />
          <TextName style={styles.name}>{ nome }</TextName>
        </View>
      ))}
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16
  },
  image:{
    width: 46,
    height: 46
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646'
  }
})