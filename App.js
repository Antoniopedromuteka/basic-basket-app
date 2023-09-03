import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import { Basket } from './src/views/Basket/basket';
import * as SplashScreen from 'expo-splash-screen';
import { UseLoadFonts } from './src/hooks/useLoadFonts';
import mock from "./src/mocks/cesta"

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { fontsLoaded, onLayoutRootView } = UseLoadFonts();
  if(!fontsLoaded){
    return null
  }
  return (
    <SafeAreaView
      onLayout={onLayoutRootView}
    >
      <StatusBar/>
      <Basket {...mock}/>
    </SafeAreaView>
  ); 
}
