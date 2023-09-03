import React from 'react'
import { TextName } from '../../../components/Text'
import { FlatList, Image, StyleSheet, View } from 'react-native'

export const Item = ({ item :{ nome, imagem } }) => {  
  return (
    <>
      <View key={nome} style={styles.container}>
          <Image style={styles.image} source={imagem} />
          <TextName style={styles.name}>{ nome }</TextName>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingVertical: 16,
    marginHorizontal: 16,
    borderBottomColor: '#ECECEC',
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