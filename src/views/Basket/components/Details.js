import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'
import logo from '../../../../assets/logo.png'
import { TextName } from '../../../components/Text'


export const Details = ({ nome, logoFazenda, nomeFazenda, descricao, preco }) => {
  return (
    <>
    <View style={styles.BasketContainer}>
        <TextName style={styles.name}>{nome}</TextName>
        <View style={styles.farmContainer}>
          <Image source={logoFazenda} style={styles.farmImage} />
          <TextName style={styles.farmName}>{nomeFazenda}</TextName>
        </View>
        <TextName style={styles.description}>
          {descricao}
        </TextName>
        <Text style={styles.price}>{preco}</Text>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  BasketContainer:{
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  name:{
    fontWeight: 'bold',
    fontSize: 26
  },
  farmImage: {
    width: 32,
    height: 32
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontWeight: 'normal'
  },
  farmContainer:{
    flexDirection: 'row',
    paddingVertical: 12,
    alignItems: 'center'
  },
  description: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26
  },
  price: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8
  }
})