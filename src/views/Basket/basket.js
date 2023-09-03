import React from 'react'
import { Top } from './components/Top'
import { Details } from './components/Details'
import { Item } from './components/item'
import { FlatList, StyleSheet, View } from 'react-native'
import { TextName } from '../../components/Text'

export const Basket = ({ topo, detalhes, itens}) => {
  return (
    <>
     
      <FlatList 
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={() => {
          return <>
            <Top {...topo}/>
            <View style={styles.BasketContainer}>
              <Details {...detalhes}/>
              <TextName style={styles.title}>{itens.titulo}</TextName>
            </View>
          </>
        }}
      /> 
    </>
  )
}

const styles = StyleSheet.create({
  BasketContainer:{
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  title: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
  },
})