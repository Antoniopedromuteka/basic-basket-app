import React from 'react'
import { Image, StyleSheet, Dimensions, Text } from 'react-native'
import topo from "../../../../assets/topo.png"

const width = Dimensions.get('screen').width

export const Top = ({ titulo }) => {
  return (
    <>
      <Image source={topo} style={styles.top}/>
      <Text style={styles.title} >{titulo}</Text>
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
    padding: 16
  },
})