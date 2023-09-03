import React from 'react'
import { Image, StyleSheet, View, Text } from 'react-native'
import logo from '../../../../assets/logo.png'
import { TextName } from '../../../components/Text'


export const Details = () => {
  return (
    <>
    <View style={styles.BasketContainer}>
        <TextName style={styles.name}>Cesta de Verduras</TextName>
        <View style={styles.farmContainer}>
          <Image source={logo} style={styles.farmImage} />
          <TextName style={styles.farmName}>Jenny Jack Farms</TextName>
        </View>
        <TextName style={styles.description}>
            Uma cesta com produtos selecionados
            cuidadosamente da fazenda
            direito para sua cozinha
        </TextName>
        <Text style={styles.price}>AOA 40,00</Text>
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