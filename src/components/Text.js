import React from 'react'
import * as C from 'react-native'
export const TextName = ({ children, style}) => {
  let textSyle = styles.text 

  if(style && style.fontWeight === 'bold'){
    textSyle = styles.negritText
  }
  return (
    <C.Text style={[textSyle, style]}>{children}</C.Text>
  )
}

const styles = C.StyleSheet.create({
  text: {
      fontSize: 16,
      lineHeight: 26,
      marginLeft: 12,
      fontFamily: 'MontserratRegular',
      fontWeight: 'normal'
  },
  negritText: {
    fontFamily: 'MontserratBold',
    fontWeight: 'normal'
  }
})
