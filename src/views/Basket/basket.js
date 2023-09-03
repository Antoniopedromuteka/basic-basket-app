import React from 'react'
import { Top } from './components/Top'
import { Details } from './components/Details'
import { Items } from './components/items'
import { ScrollView, StyleSheet, View } from 'react-native'

export const Basket = ({ topo, detalhes, itens}) => {
  return (
    <ScrollView>
      <Top {...topo}/>
      <View style={styles.BasketContainer}>
      <Details {...detalhes}/>
      <Items {...itens}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  BasketContainer:{
    paddingVertical: 8,
    paddingHorizontal: 16
  },
})