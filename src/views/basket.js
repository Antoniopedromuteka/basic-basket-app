import React from 'react'
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native'
import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'

const width = Dimensions.get('screen').width
export const Basket = () => {
  return (
    <>
      <Image source={topo} style={styles.top}/>
      <Text style={styles.title}>Detalhe da cesta</Text>
      <View style={styles.BasketContainer}>
        <Text style={styles.name}>Cesta de Verduras</Text>
        <View style={styles.farmContainer}>
          <Image source={logo} style={styles.farmImage} />
          <Text style={styles.farmName}>Jenny Jack Farms</Text>
        </View>
        <Text style={styles.description}>
            Uma cesta com produtos selecionados
            cuidadosamente da fazenda
            direito para sua cozinha
        </Text>
        <Text style={styles.price}>AOA 40,00</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  top:{
    width: '100%',
    height: 578 / 768 * width,
  },
  title: {
    position: 'absolute',
    textAlign: 'center',
    width: '100%',
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    fontWeight: 'bold',
    padding: 16
  },
  name: {
    fontSize: 26,
    lineHeight: 42,
    color: '#464646',
    fontFamily: 'Montserrat_700Bold'
  },
  BasketContainer:{
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  farmImage: {
    width: 32,
    height: 32
  },
  farmName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: 'Montserrat_400Regular'
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
